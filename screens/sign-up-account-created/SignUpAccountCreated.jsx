import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function SignUpAccountCreated() {
    const navigation = useNavigation()

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image
                    source={require("../../assets/images/account-created.png")}
                    style={styles.bgImage}
                    resizeMode="contain"
                />
                <Text style={styles.titleText}>Account Created!</Text>
                <Text style={styles.descriptionText}>
                    Your account had bead created successfully. Please sign in
                    to use your account and enjoy
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("login")
                    }}
                >
                    <Text style={styles.buttonText}>Take me to Sign In</Text>
                </TouchableOpacity>
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
        justifyContent: "center",
        gap: 10
    },
    bgImage: {
        height: 200,
        width: "90%"
    },
    titleText: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        color: "#1C274C",
        marginTop: 25
    },
    descriptionText: {
        fontSize: 17.5,
        fontFamily: "Genos-Light",
        color: "#1C274C",
        opacity: 0.6,
        width: 235,
        textAlign: "center"
    },
    button: {
        height: 50,
        width: "85%",
        borderRadius: 10,
        backgroundColor: "#2796C4",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        elevation: 5,
        shadowOffset: { width: 2.5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: "#5F9CE3"
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "Genos-Medium",
        color: "white",
        lineHeight: 22.5
    }
})
