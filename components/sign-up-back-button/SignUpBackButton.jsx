import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default function SignUpBackButton({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.actionButtonContainer}
            onPress={onPress}
        >
            <Text style={styles.actionButtonText}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    actionButtonContainer: {
        height: 42.5,
        width: "42.5%",
        borderRadius: 7.5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#2796C4",
        backgroundColor: "white"
    },
    actionButtonText: {
        fontSize: 20,
        fontFamily: "Genos-Regular",
        lineHeight: 22.5,
        color: "#2796C4"
    }
})
