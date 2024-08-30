import React from "react"
import { View, Image, TextInput, StyleSheet } from "react-native"

export default function LanguageSearchBar() {
    return (
        <View style={styles.searchBarContainer}>
            <Image
                source={require("../../assets/icons/search.png")}
                style={styles.searchBarIcon}
                resizeMode="contain"
            />
            <TextInput
                style={styles.inputField}
                placeholder="Search language..."
                placeholderTextColor={"gray"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        height: 55,
        width: "100%",
        borderRadius: 7.5,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 15
    },
    searchBarIcon: {
        height: 20,
        width: 20
    },
    inputField: {
        flex: 1,
        fontSize: 20,
        fontFamily: "Genos-Regular",
        lineHeight: 25
    }
})
