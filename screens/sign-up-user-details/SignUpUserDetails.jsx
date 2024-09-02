import React from "react"
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text,
    TextInput,
    ImageBackground,
    Platform,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import LinearGradient from "react-native-linear-gradient"
import SignUpBackButton from "../../components/sign-up-back-button/SignUpBackButton"
import SignUpNextButton from "../../components/sign-up-next-button/SignUpNextButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function SignUpUserDetails() {
    const navigation = useNavigation()

    return (
        <View style={styles.wrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.layout}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <ImageBackground
                            source={require("../../assets/images/bg-image.png")}
                            style={styles.bgImage}
                            resizeMode="cover"
                        >
                            <LinearGradient
                                colors={["transparent", "#F2F2F2"]}
                                style={styles.linearGradient}
                            />
                        </ImageBackground>
                        <View style={styles.bodyContainer}>
                            <View style={styles.inputFieldWrapper}>
                                <Text style={styles.inputFieldTitleText}>
                                    First Name
                                </Text>
                                <TextInput
                                    style={styles.inputField}
                                    inputMode="text"
                                    placeholder="First Name"
                                    placeholderTextColor={"#9796A1"}
                                />
                            </View>
                            <View style={styles.inputFieldWrapper}>
                                <Text style={styles.inputFieldTitleText}>
                                    Last Name
                                </Text>
                                <TextInput
                                    style={styles.inputField}
                                    inputMode="text"
                                    placeholder="Last Name"
                                    placeholderTextColor={"#9796A1"}
                                />
                            </View>
                            <View style={styles.inputFieldWrapper}>
                                <Text style={styles.inputFieldTitleText}>
                                    User Name
                                </Text>
                                <TextInput
                                    style={styles.inputField}
                                    inputMode="text"
                                    placeholder="Username"
                                    placeholderTextColor={"#9796A1"}
                                />
                            </View>
                            <View style={styles.actionButtonsWrapper}>
                                <SignUpBackButton
                                    onPress={() => {
                                        navigation.goBack()
                                    }}
                                />
                                <SignUpNextButton
                                    onPress={() => {
                                        // navigation.navigate("sign-up-user-details")
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <FooterNav />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    layout: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    bgImage: {
        height: 500,
        width: "100%",
        overflow: "hidden",
        justifyContent: "flex-end"
    },
    linearGradient: {
        height: "25%",
        width: "100%"
    },
    bodyContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    inputFieldWrapper: {
        width: "90%",
        flexDirection: "column",
        gap: 10,
        marginTop: 15
    },
    inputFieldTitleText: {
        fontSize: 17.5,
        color: "#9796A1",
        fontFamily: "Genos-Regular"
    },
    inputField: {
        height: 45,
        width: "100%",
        borderRadius: 6.5,
        backgroundColor: "white",
        fontFamily: "Genos-Regular",
        fontSize: 17.5,
        paddingHorizontal: 10
    },
    actionButtonsWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 25
    }
})
