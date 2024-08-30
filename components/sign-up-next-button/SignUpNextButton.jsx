import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function SignUpNextButton({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.actionButtonContainer}
            onPress={onPress}
        >
            <Text style={styles.actionButtonText}>Next</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    actionButtonContainer: {
        height: 42.5,
        width: "45%",
        borderRadius: 7.5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2796C4",
        elevation: 5,
        shadowOffset: { width: 2.5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: "#5F9CE3"
    },
    actionButtonText: {
        fontSize: 20,
        fontFamily: "Genos-Regular",
        lineHeight: 22.5,
        color: "white"
    }
})

SignUpNextButton.propTypes = {
    onPress: PropTypes.func.isRequired
}
