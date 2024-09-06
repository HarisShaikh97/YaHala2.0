import React from "react"
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { BlurView } from "@react-native-community/blur"
import PropTypes from "prop-types"

export default function AccountConfirmationPopup({ showPopup, setShowPopup }) {
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
                blurType="light"
                blurAmount={2.5}
                reducedTransparencyFallbackColor="white"
            />
            <View style={styles.popupContainer}>
                <View style={styles.popupHeaderContainer}>
                    <Text style={styles.popupTitleText}>
                        Account Confirmation
                    </Text>
                </View>
                <View style={styles.popupBodyContainer}>
                    <Text style={styles.popupBodyText} numberOfLines={3}>
                        An email has been sent to you Follow direction in the
                        email to complete your account
                    </Text>
                    <TouchableOpacity
                        style={styles.okButton}
                        onPress={() => {
                            setShowPopup(false)
                            navigation.navigate("sign-up-verification-code")
                        }}
                    >
                        <Text style={styles.okButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    popupContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -162.5 }, { translateY: -107.5 }],
        height: 215,
        width: 325,
        borderRadius: 12.5,
        backgroundColor: "white",
        flexDirection: "column",
        overflow: "hidden",
        elevation: 5,
        shadowOffset: { width: 2.5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        zIndex: 10
    },
    popupHeaderContainer: {
        width: "100%",
        backgroundColor: "#2796C4",
        alignItems: "center",
        paddingVertical: 10
    },
    popupTitleText: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        color: "white",
        lineHeight: 27.5
    },
    popupBodyContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 25
    },
    popupBodyText: {
        fontSize: 17.5,
        fontFamily: "Genos-Regular",
        textAlign: "center",
        color: "#333333",
        opacity: 0.6,
        lineHeight: 22.5
    },
    okButton: {
        height: 40,
        width: 140,
        borderRadius: 20,
        backgroundColor: "#2796C4",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOffset: { width: 2.5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: "#5F9CE3"
    },
    okButtonText: {
        fontSize: 20,
        fontFamily: "Genos-Medium",
        color: "white",
        lineHeight: 22.5
    }
})

AccountConfirmationPopup.propTypes = {
    showPopup: PropTypes.bool.isRequired,
    setShowPopup: PropTypes.func.isRequired
}
