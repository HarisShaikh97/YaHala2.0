import React, { useState } from "react"
import {
    View,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import ScreenHeader from "../../components/screen-header/ScreenHeader"
import FormButton from "../../components/form-button/FormButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function CreatePassword() {
    const navigation = useNavigation()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <View style={styles.wrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.layout}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <ScreenHeader title="Create Password" />
                        <View style={styles.bodyContainer}>
                            <Text style={styles.descriptionText}>
                                Choose a secure password that will be easy for
                                you to remember.
                            </Text>
                            <View style={styles.inputFieldWrapper}>
                                <Text style={styles.inputFieldTitleText}>
                                    Password
                                </Text>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput
                                        style={styles.inputField}
                                        secureTextEntry={!showPassword}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            setShowPassword(!showPassword)
                                        }}
                                    >
                                        <Image
                                            source={
                                                showPassword
                                                    ? require("../../assets/icons/eye-closed.png")
                                                    : require("../../assets/icons/eye.png")
                                            }
                                            style={styles.showPasswordIcon}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.inputFieldWrapper}>
                                <Text style={styles.inputFieldTitleText}>
                                    Confirm Password
                                </Text>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput
                                        style={styles.inputField}
                                        secureTextEntry={!showConfirmPassword}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }}
                                    >
                                        <Image
                                            source={
                                                showConfirmPassword
                                                    ? require("../../assets/icons/eye-closed.png")
                                                    : require("../../assets/icons/eye.png")
                                            }
                                            style={styles.showPasswordIcon}
                                            contentFit="contain"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.listContainer}>
                                <View style={styles.listItemContainer}>
                                    <Image
                                        source={require("../../assets/icons/check.png")}
                                        style={styles.listItemCheckIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={[
                                            styles.listItemText,
                                            styles.listItemTextGray
                                        ]}
                                    >
                                        Has at least 8 characters
                                    </Text>
                                </View>
                                <View style={styles.listItemContainer}>
                                    <Image
                                        source={require("../../assets/icons/check.png")}
                                        style={styles.listItemCheckIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={[
                                            styles.listItemText,
                                            styles.listItemTextGray
                                        ]}
                                    >
                                        Has an uppercase letter or symbol
                                    </Text>
                                </View>
                                <View style={styles.listItemContainer}>
                                    <Image
                                        source={require("../../assets/icons/check-green.png")}
                                        style={styles.listItemCheckIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={[
                                            styles.listItemText,
                                            styles.listItemTextGreen
                                        ]}
                                    >
                                        Has a number
                                    </Text>
                                </View>
                            </View>
                            <FormButton
                                title="Continue"
                                onPress={() => {
                                    navigation.navigate("login")
                                }}
                            />
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
        paddingTop: 50
    },
    bodyContainer: {
        width: "100%",
        flexDirection: "column",
        marginTop: 35,
        alignItems: "center",
        gap: 25
    },
    descriptionText: {
        fontSize: 17.5,
        fontFamily: "Genos-Regular",
        opacity: 0.6,
        marginVertical: 5,
        textAlign: "center",
        marginHorizontal: 15,
        color: "black"
    },
    inputFieldWrapper: {
        width: "100%",
        flexDirection: "column",
        gap: 5
    },
    inputFieldTitleText: {
        fontSize: 17.5,
        fontFamily: "Genos-Regular",
        color: "#9796A1"
    },
    inputFieldContainer: {
        height: 50,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 15
    },
    inputField: {
        flex: 1,
        fontSize: 20,
        fontFamily: "Genos-Regular",
        lineHeight: 25,
        color: "black"
    },
    showPasswordIcon: {
        height: 22.5,
        width: 22.5
    },
    listContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 10,
        marginBottom: 10
    },
    listItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    listItemCheckIcon: {
        height: 20,
        width: 20
    },
    listItemText: {
        fontSize: 17.5,
        fontFamily: "Genos-Light",
        lineHeight: 20
    },
    listItemTextGray: {
        color: "gray"
    },
    listItemTextGreen: {
        color: "#28CD56"
    }
})
