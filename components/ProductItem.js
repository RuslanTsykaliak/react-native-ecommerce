import React, { useState } from "react"
import { StyleSheet, Text, View, Pressable, Image } from "react-native"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/CartReducer"

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false)
  const dispatch = useDispatch()

  const addItemToCart = (item) => {
    setAddedToCart(true)
    dispatch(addToCart(item))

    // Reset 'addedToCart' state after 60000 milliseconds (1 minute)
    setTimeout(() => {
      setAddedToCart(false)
    }, 60000)
  }

  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.image }} />

      <Text numberOfLines={1} style={styles.title}>
        {item?.title}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.price}>₹{item?.price}</Text>
        <Text style={styles.rating}>{item?.rating?.rate} ratings</Text>
      </View>

      <Pressable
        onPress={() => addItemToCart(item)}
        style={addedToCart ? styles.addedButton : styles.addButton}
      >
        <Text style={styles.buttonText}>
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </Text>
      </Pressable>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({})
