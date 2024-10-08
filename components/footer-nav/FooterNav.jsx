import React, {
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"

export default function FooterNav() {
    const route = useRoute()
    const navigation = useNavigation()

    return (
        <View style={styles.footerWrapper}>
            <SafeAreaView style={styles.footerContainer}>
                <TouchableOpacity
                    style={[
                        styles.navButton,
                        route.name === "select-language"
                            ? styles.navButtonSelected
                            : styles.navButtonUnSelected
                    ]}
                    onPress={() => {
                        if (route?.name !== "select-language") {
                            navigation.navigate("select-language")
                        }
                    }}
                >
                    <Image
                        source={
                            route.name === "select-language"
                                ? require("../../assets/icons/language-white.png")
                                : require("../../assets/icons/language.png")
                        }
                        style={styles.navIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navButton, styles.navButtonUnSelected]}
                    onPress={() => {
                        if (!route?.name?.includes("policy-and-terms")) {
                            navigation.navigate("policy-and-terms-list")
                        }
                    }}
                >
                    <Image
                        source={require("../../assets/icons/policy-and-terms.png")}
                        style={styles.navIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if (route.name !== "home") {
                            navigation.navigate("home")
                        }
                    }}
                >
                    <Image
                        source={require("../../assets/icons/YaHala-logo.png")}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.navButton,
                        route?.name === "login"
                            ? styles.navButtonSelected
                            : styles.navButtonUnSelected
                    ]}
                    onPress={() => {
                        if (route.name !== "login") {
                            navigation.navigate("login")
                        }
                    }}
                >
                    <Image
                        source={
                            route.name === "login"
                                ? require("../../assets/icons/sign-in-white.png")
                                : require("../../assets/icons/sign-in.png")
                        }
                        style={styles.navIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.navButton,
                        route.name.includes("sign-up")
                            ? styles.navButtonSelected
                            : styles.navButtonUnSelected
                    ]}
                    onPress={() => {
                        if (route.name !== "sign-up-select-language") {
                            navigation.navigate("sign-up-select-language")
                        }
                    }}
                >
                    <Image
                        source={
                            route.name.includes("sign-up")
                                ? require("../../assets/icons/sign-up-white.png")
                                : require("../../assets/icons/sign-up.png")
                        }
                        style={styles.navIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    footerWrapper: {
        width: "100%",
        backgroundColor: "white",
        alignItems: "center"
    },
    footerContainer: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5
    },
    navButton: {
        height: 40,
        width: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    navButtonSelected: {
        backgroundColor: "#2796C4"
    },
    navButtonUnSelected: {
        backgroundColor: "#F2F2F2"
    },
    navIcon: {
        height: 27.5,
        width: 27.5
    },
    logoImage: {
        height: 50,
        width: 50
    }
})
