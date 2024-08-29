import React from "react"
import { TouchableOpacity, Image, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function BackButton() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Image
        source={require("../../assets/icons/back.png")}
        style={styles.backIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    height: 37.5,
    width: 37.5,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  backIcon: {
    height: 17.5,
    width: 17.5
  }
})
