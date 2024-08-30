import React from "react"
import { View, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import BackButton from "../back-button/BackButton"

export default function ScreenHeader({ title }) {
    return (
        <View style={styles.headerContainer}>
            <BackButton />
            <Text style={styles.headerTitleText}>{title}</Text>
            <View style={styles.emptyView} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTitleText: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        lineHeight: 25
    },
    emptyView: {
        width: 35
    }
})

ScreenHeader.propTypes = {
    title: PropTypes.string.isRequired
}
