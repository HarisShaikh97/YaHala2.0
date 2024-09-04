import React from "react"
import {
    View,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import OtpInputField from "../../components/otp-input/OtpInput"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function VerificationCode() {
    const navigation = useNavigation()

    return (
        <View style={styles.wrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.layout}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Text style={styles.headerTitleText}>
                            Forget Password
                        </Text>
                        <View style={styles.bodyContainer}>
                            <Image
                                source={require("../../assets/images/verification-code.png")}
                                style={styles.bgImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.titleText}>
                                Verification Code
                            </Text>
                            <Text style={styles.descriptionText}>
                                Please type the verification code sent to
                                prelookstudio@gmail.com
                            </Text>
                            <OtpInputField />
                            <View style={styles.resendTextWrapper}>
                                <Text
                                    style={[
                                        styles.resendText,
                                        styles.resendTextDark
                                    ]}
                                >
                                    I didn{"'"}t receive a code!
                                </Text>
                                <TouchableOpacity>
                                    <Text
                                        style={[
                                            styles.resendText,
                                            styles.resendTextOrange
                                        ]}
                                    >
                                        Please resend
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.sendButton}
                                onPress={() => {
                                    navigation.navigate("create-password")
                                }}
                            >
                                <Text style={styles.sendButtonText}>Send</Text>
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
        alignItems: "center",
        paddingTop: 50
    },
    headerTitleText: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        lineHeight: 27.5
    },
    bodyContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 65,
        paddingHorizontal: 15,
        gap: 10
    },
    bgImage: {
        height: 150,
        width: 200
    },
    titleText: {
        fontSize: 30,
        fontFamily: "Genos-Medium"
    },
    descriptionText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "#1C274C",
        opacity: 0.6,
        marginVertical: 5,
        textAlign: "center"
    },
    resendTextWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    resendText: {
        fontSize: 15,
        fontFamily: "Genos-Regular"
    },
    resendTextDark: {
        color: "#1C274C",
        opacity: 0.7
    },
    resendTextOrange: {
        color: "#FE724C"
    },
    sendButton: {
        height: 50,
        width: "85%",
        borderRadius: 10,
        backgroundColor: "#2796C4",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 75,
        elevation: 5,
        shadowOffset: { width: 2.5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: "#5F9CE3"
    },
    sendButtonText: {
        fontSize: 20,
        fontFamily: "Genos-Bold",
        color: "white",
        lineHeight: 22.5
    }
})
