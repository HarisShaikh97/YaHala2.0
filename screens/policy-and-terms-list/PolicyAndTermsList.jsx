import React from "react"
import { View, Text, Platform, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function PolicyAndTermsList() {
    const navigation = useNavigation()

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.headerTitleText}>Policy and Terms</Text>
                <View style={styles.bodyContainer}></View>
            </View>
            <FooterNav />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: Platform.OS === "android" ? 25 : 50
    },
    headerTitleText: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        lineHeight: 27.5,
        color: "#333333"
    },
    bodyContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 35,
        gap: 25
    }
})
