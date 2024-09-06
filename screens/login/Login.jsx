import React, { useState } from "react"
import {
    View,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import FormButton from "../../components/form-button/FormButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function Login() {
    const navigation = useNavigation()

    const [isEmailFocused, setIsEmailFocused] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)

    return (
        <View style={styles.wrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.layout}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Image
                            source={require("../../assets/images/sign-in.png")}
                            style={styles.bgImage}
                            alt="image"
                            resizeMode="contain"
                        />
                        <View style={styles.inputFieldWrapper}>
                            <Text style={styles.inputFieldTitleText}>
                                E-Mail
                            </Text>
                            <TextInput
                                style={[
                                    styles.inputField,
                                    isEmailFocused
                                        ? styles.inputFieldFocused
                                        : styles.inputFieldUnFocused
                                ]}
                                inputMode="email"
                                placeholder="example@gmail.com"
                                placeholderTextColor={"gray"}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                            />
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <Text style={styles.inputFieldTitleText}>
                                Password
                            </Text>
                            <TextInput
                                style={[
                                    styles.inputField,
                                    isPasswordFocused
                                        ? styles.inputFieldFocused
                                        : styles.inputFieldUnFocused
                                ]}
                                inputMode="text"
                                placeholder="Password"
                                placeholderTextColor={"gray"}
                                secureTextEntry
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.forgotPasswordButton}
                            onPress={() => {
                                navigation.navigate("reset-password")
                            }}
                        >
                            <Text style={styles.forgotPasswordButtonText}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                        <FormButton title="Login" onPress={() => {}} />
                        <View style={styles.signupTextSection}>
                            <Text style={styles.accountText}>
                                Don{"'"}t have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(
                                        "sign-up-select-language"
                                    )
                                }}
                            >
                                <Text style={styles.signupText}>Sign Up</Text>
                            </TouchableOpacity>
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
        flex: 1,
        flexDirection: "column"
    },
    layout: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingTop: 65
    },
    bgImage: {
        height: 150,
        width: 250,
        alignSelf: "center"
    },
    inputFieldWrapper: {
        width: "100%",
        flexDirection: "column",
        gap: 10,
        marginTop: 25
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
        fontFamily: "Genos-Light",
        fontSize: 17.5,
        paddingHorizontal: 10,
        borderWidth: 1,
        color: "black"
    },
    inputFieldFocused: {
        borderColor: "#316AAC"
    },
    inputFieldUnFocused: {
        borderColor: "white"
    },
    forgotPasswordButton: {
        marginTop: 15,
        marginBottom: 25,
        alignSelf: "flex-end"
    },
    forgotPasswordButtonText: {
        fontSize: 15,
        color: "#316AAC",
        fontFamily: "Genos-Regular",
        textDecorationLine: "underline"
    },
    signupTextSection: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15
    },
    accountText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "#333333",
        opacity: 0.8
    },
    signupText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "#2796C4"
    }
})
