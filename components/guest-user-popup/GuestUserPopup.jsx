import React from "react"
import {
    View,
    Image,
    ImageBackground,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { BlurView } from "@react-native-community/blur"
import PropTypes from "prop-types"

export default function GuestUserPopup({ showPopup, setShowPopup }) {
    const navigation = useNavigation()

    return (
        <Modal
            animationType="fade"
            transparent
            visible={showPopup}
            onRequestClose={() => {
                setShowPopup(false)
            }}
            style={styles.popupWrapper}
        >
            <BlurView
                style={styles.blurView}
                blurType="dark"
                blurAmount={2.5}
                reducedTransparencyFallbackColor="white"
            />
            <ImageBackground
                source={require("../../assets/images/guest-user-popup-background.png")}
                style={styles.bgImage}
                resizeMode="contain"
            >
                <View style={styles.infoIconContainer}>
                    <View style={styles.infoIconCircle} />
                    <View style={styles.infoIconRectangle} />
                </View>
                <TouchableOpacity
                    style={styles.crossIconContainer}
                    onPress={() => {
                        setShowPopup(false)
                    }}
                >
                    <Image
                        source={require("../../assets/icons/cross-red.png")}
                        style={styles.crossIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.popupTitleText}>Dear Guest</Text>
                <Text style={styles.popupDescriptionText}>
                    To get access to our content You have to Create account or
                    Sign up
                </Text>
                <View style={styles.authenticationButtonsWrapper}>
                    <TouchableOpacity
                        style={styles.authenticationButtonContainer}
                        onPress={() => {
                            setShowPopup(false)
                            navigation.navigate("sign-up-select-language")
                        }}
                    >
                        <Image
                            source={require("../../assets/icons/sign-up.png")}
                            style={styles.authenticationIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.authenticationButtonTitleText}>
                            Create Account
                        </Text>
                        <Text
                            style={styles.authenticationButtonDescriptionText}
                        >
                            Join to us, and enjoy our Platform
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.authenticationButtonContainer}
                        onPress={() => {
                            setShowPopup(false)
                            navigation.navigate("login")
                        }}
                    >
                        <Image
                            source={require("../../assets/icons/sign-in.png")}
                            style={styles.authenticationIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.authenticationButtonTitleText}>
                            Sign in
                        </Text>
                        <Text
                            style={styles.authenticationButtonDescriptionText}
                        >
                            Please use your Login Details for Access
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                        setShowPopup(false)
                    }}
                >
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </ImageBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({
    popupWrapper: {
        flex: 1,
        width: "100%",
        position: "relative"
    },
    blurView: {
        flex: 1
    },
    bgImage: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -232.5 }],
        height: 465,
        width: 300,
        flexDirection: "column",
        alignItems: "center"
    },
    infoIconContainer: {
        height: 90,
        width: 90,
        borderRadius: 50,
        borderWidth: 3.5,
        borderColor: "white",
        backgroundColor: "#2796C4",
        position: "absolute",
        top: -41,
        left: "50%",
        transform: [{ translateX: -45 }],
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        zIndex: 10
    },
    infoIconCircle: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: "white"
    },
    infoIconRectangle: {
        height: 45,
        width: 15,
        borderRadius: 2.5,
        backgroundColor: "white"
    },
    crossIconContainer: {
        margin: 10,
        alignSelf: "flex-end"
    },
    crossIcon: {
        height: 25,
        width: 25
    },
    popupTitleText: {
        fontSize: 25,
        fontFamily: "Genos-Medium",
        marginTop: 20,
        textAlign: "center",
        lineHeight: 27.5,
        color: "#333333"
    },
    popupDescriptionText: {
        fontSize: 15,
        fontFamily: "Genos-Light",
        marginTop: 10,
        textAlign: "center",
        lineHeight: 17.5,
        marginHorizontal: 25,
        color: "#64748B"
    },
    authenticationButtonsWrapper: {
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        marginTop: 15
    },
    authenticationButtonContainer: {
        height: 110,
        width: 225,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#F2F2F2",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    authenticationIcon: {
        height: 35,
        width: 35
    },
    authenticationButtonTitleText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "#1C274C",
        lineHeight: 17.5,
        marginTop: 5
    },
    authenticationButtonDescriptionText: {
        fontSize: 12.5,
        fontFamily: "Genos-Light",
        color: "#1C274C",
        lineHeight: 15,
        opacity: 0.75
    },
    closeButton: {
        height: 30,
        width: 70,
        borderRadius: 15,
        backgroundColor: "#2796C4",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: "auto"
    },
    closeButtonText: {
        fontSize: 17.5,
        fontFamily: "Genos-Bold",
        color: "white",
        lineHeight: 20
    }
})

GuestUserPopup.propTypes = {
    showPopup: PropTypes.bool.isRequired,
    setShowPopup: PropTypes.func.isRequired
}
