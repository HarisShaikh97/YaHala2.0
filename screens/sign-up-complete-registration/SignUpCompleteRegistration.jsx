import React, { useState } from "react"
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import AccountConfirmationPopup from "../../components/account-confirmation-popup/AccountConfirmationPopup"
import ScreenHeader from "../../components/screen-header/ScreenHeader"
import SignUpBackButton from "../../components/sign-up-back-button/SignUpBackButton"
import SignUpNextButton from "../../components/sign-up-next-button/SignUpNextButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function SignUpCompleteRegistration() {
    const navigation = useNavigation()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    return (
        <View style={styles.wrapper}>
            <AccountConfirmationPopup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.layout}
            >
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <ScreenHeader title="Complete Registration" />
                        <View style={styles.bodyContainer}>
                            <View style={styles.sectionBox}>
                                <View style={styles.sectionTitleContainer}>
                                    <View style={styles.circularSeparator} />
                                    <Text style={styles.sectionTitleText}>
                                        Your E-Mail Address
                                    </Text>
                                    <View style={styles.circularSeparator} />
                                </View>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Type your E-Mail"
                                        placeholderTextColor={
                                            "rgba(28, 39, 76, 0.2)"
                                        }
                                    />
                                    <Image
                                        source={require("../../assets/icons/email.png")}
                                        style={styles.inputFieldIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Repeat your E-Mail"
                                        placeholderTextColor={
                                            "rgba(28, 39, 76, 0.2)"
                                        }
                                    />
                                    <Image
                                        source={require("../../assets/icons/email.png")}
                                        style={styles.inputFieldIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={styles.informationBox}>
                                    <Image
                                        source={require("../../assets/icons/information.png")}
                                        style={styles.informationIcon}
                                        resizeMode="contain"
                                    />
                                    <View
                                        style={
                                            styles.informationBoxTextContainer
                                        }
                                    >
                                        <Text
                                            style={
                                                styles.informationBoxTitleText
                                            }
                                        >
                                            Information
                                        </Text>
                                        <View
                                            style={
                                                styles.informationBoxDescriptionTextWrapper
                                            }
                                        >
                                            <Text
                                                style={
                                                    styles.informationBoxDescriptionText
                                                }
                                            >
                                                This E-Mail already exists
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate("login")
                                                }}
                                            >
                                                <Text
                                                    style={styles.LoginNowText}
                                                >
                                                    Login now
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.emptyView} />
                                </View>
                                <View style={styles.informationBox}>
                                    <Image
                                        source={require("../../assets/icons/information.png")}
                                        style={styles.informationIcon}
                                        resizeMode="contain"
                                    />
                                    <View
                                        style={
                                            styles.informationBoxTextContainer
                                        }
                                    >
                                        <Text
                                            style={
                                                styles.informationBoxTitleText
                                            }
                                        >
                                            Information
                                        </Text>
                                        <Text
                                            style={
                                                styles.informationBoxDescriptionText
                                            }
                                        >
                                            E-Mail doesn{"'"}t match
                                        </Text>
                                    </View>
                                    <View style={styles.emptyView} />
                                </View>
                            </View>
                            <View style={styles.sectionBox}>
                                <View style={styles.sectionTitleContainer}>
                                    <View style={styles.circularSeparator} />
                                    <Text style={styles.sectionTitleText}>
                                        Your Phone Number
                                    </Text>
                                    <View style={styles.circularSeparator} />
                                </View>
                                <View style={styles.inputPhoneWrapper}>
                                    <View style={styles.countryCodeContainer}>
                                        <Text style={styles.countryCodeText}>
                                            +49
                                        </Text>
                                    </View>
                                    <View style={styles.inputFieldContainer}>
                                        <TextInput
                                            style={styles.inputField}
                                            placeholder="Phone Number"
                                            placeholderTextColor={
                                                "rgba(28, 39, 76, 0.2)"
                                            }
                                            inputMode="numeric"
                                        />
                                        <Image
                                            source={require("../../assets/icons/phone.png")}
                                            style={styles.inputFieldIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                                <View style={styles.informationBox}>
                                    <Image
                                        source={require("../../assets/icons/information.png")}
                                        style={styles.informationIcon}
                                        resizeMode="contain"
                                    />
                                    <View
                                        style={
                                            styles.informationBoxTextContainer
                                        }
                                    >
                                        <Text
                                            style={
                                                styles.informationBoxTitleText
                                            }
                                        >
                                            Information
                                        </Text>
                                        <Text
                                            style={
                                                styles.informationBoxDescriptionText
                                            }
                                        >
                                            This Phone number already exists
                                        </Text>
                                    </View>
                                    <View style={styles.emptyView} />
                                </View>
                            </View>
                            <View style={styles.sectionBox}>
                                <View style={styles.sectionTitleContainer}>
                                    <View style={styles.circularSeparator} />
                                    <Text style={styles.sectionTitleText}>
                                        Create a Password
                                    </Text>
                                    <View style={styles.circularSeparator} />
                                </View>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Enter a password"
                                        placeholderTextColor={
                                            "rgba(28, 39, 76, 0.2)"
                                        }
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
                                            style={styles.inputFieldIcon}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Enter a password"
                                        placeholderTextColor={
                                            "rgba(28, 39, 76, 0.2)"
                                        }
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
                                            style={styles.inputFieldIcon}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.listContainer}>
                                    <View style={styles.listItemContainer}>
                                        <Image
                                            source={require("../../assets/icons/check-red.png")}
                                            style={styles.listItemCheckIcon}
                                            resizeMode="contain"
                                        />
                                        <Text
                                            style={[
                                                styles.listItemText,
                                                styles.listItemTextRed
                                            ]}
                                        >
                                            Has at least 8 characters
                                        </Text>
                                    </View>
                                    <View style={styles.listItemContainer}>
                                        <Image
                                            source={require("../../assets/icons/check-red.png")}
                                            style={styles.listItemCheckIcon}
                                            resizeMode="contain"
                                        />
                                        <Text
                                            style={[
                                                styles.listItemText,
                                                styles.listItemTextRed
                                            ]}
                                        >
                                            Has an uppercase letter or symbol
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
                                            Has a number
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.actionButtonsWrapper}>
                            <SignUpBackButton
                                onPress={() => {
                                    navigation.goBack()
                                }}
                            />
                            <SignUpNextButton
                                onPress={() => {
                                    setShowPopup(true)
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
        paddingTop: Platform.OS === "android" ? 25 : 50,
        gap: 15,
        paddingHorizontal: 20
    },
    scrollView: {
        flex: 1,
        width: "100%"
    },
    bodyContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 15
    },
    sectionBox: {
        width: "100%",
        borderRadius: 7.5,
        backgroundColor: "white",
        padding: 10,
        gap: 10,
        flexDirection: "column"
    },
    sectionTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    sectionTitleText: {
        fontSize: 16.5,
        fontFamily: "Genos-Light",
        color: "#1C274C",
        opacity: 0.6,
        lineHeight: 19
    },
    circularSeparator: {
        height: 3,
        width: 3,
        borderRadius: 1.5,
        backgroundColor: "#1C274C",
        opacity: 0.6
    },
    informationBox: {
        height: 50,
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "rgba(237, 28, 36, 0.05)",
        paddingHorizontal: 10
    },
    informationIcon: {
        height: 25,
        width: 25
    },
    informationBoxTextContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    informationBoxTitleText: {
        fontSize: 15,
        fontFamily: "Genos-Medium",
        color: "#1C274C"
    },
    informationBoxDescriptionTextWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    informationBoxDescriptionText: {
        fontSize: 12.5,
        fontFamily: "Genos-Light",
        color: "#1C274C"
    },
    LoginNowText: {
        fontSize: 12.5,
        fontFamily: "Genos-Medium",
        color: "#EE5488"
    },
    emptyView: {
        width: 25
    },
    inputFieldContainer: {
        flex: 1,
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EEEEEE",
        backgroundColor: "rgba(28, 39, 76, 0.01)",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 10
    },
    inputField: {
        flex: 1,
        fontSize: 17.5,
        fontFamily: "Genos-Light",
        lineHeight: 20,
        color: "black"
    },
    inputFieldIcon: {
        height: 22.5,
        width: 22.5
    },
    inputPhoneWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7.5
    },
    countryCodeContainer: {
        height: 45,
        width: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EEEEEE",
        backgroundColor: "rgba(28, 39, 76, 0.01)",
        alignItems: "center",
        justifyContent: "center"
    },
    countryCodeText: {
        fontSize: 17.5,
        fontFamily: "Genos-Medium",
        color: "#1C274C",
        lineHeight: 20
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
    listItemTextRed: {
        color: "#FC5566"
    },
    actionButtonsWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginBottom: 25
    }
})
