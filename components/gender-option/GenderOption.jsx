import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function GenderOption({
    selectedGender,
    setSelectedGender,
    item
}) {
    return (
        <View style={styles.genderOptionWrapper}>
            <TouchableOpacity
                style={[
                    styles.genderButtonContainer,
                    selectedGender?.id === item?.id
                        ? styles.selectedGenderButton
                        : styles.unSelectedGenderButton
                ]}
                onPress={() => {
                    setSelectedGender(item)
                }}
            >
                <View
                    style={[
                        styles.genderButtonImageWrapper,
                        selectedGender?.id === item?.id &&
                            styles.selectedGenderButtonImageWrapper
                    ]}
                >
                    <Image
                        source={item?.image}
                        style={styles.genderButtonImage}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
            <Text
                style={[
                    styles.genderTitleText,
                    selectedGender?.id === item?.id
                        ? styles.selectedGenderTitleText
                        : styles.unSelectedGenderTitleText
                ]}
            >
                {item?.title}
            </Text>
            <View
                style={[
                    styles.checkBox,
                    selectedGender?.id === item?.id
                        ? styles.checkBoxChecked
                        : styles.checkBoxUnChecked
                ]}
            >
                <Image
                    source={require("../../assets/icons/check-white.png")}
                    style={styles.checkIcon}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    genderOptionWrapper: {
        flexDirection: "column",
        alignItems: "center",
        gap: 5
    },
    genderButtonContainer: {
        height: 135,
        width: 135,
        borderRadius: 67.5,
        borderWidth: 1.5,
        backgroundColor: "white",
        overflow: "hidden"
    },
    unSelectedGenderButton: {
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    selectedGenderButton: {
        borderColor: "#2796C4"
    },
    genderButtonImageWrapper: {
        height: "100%",
        width: "100%",
        borderRadius: 67.5,
        alignItems: "center",
        justifyContent: "center"
    },
    selectedGenderButtonImageWrapper: {
        backgroundColor: "rgba(95, 156, 227, 0.1)"
    },
    genderButtonImage: {
        height: 85,
        width: 85
    },
    genderTitleText: {
        fontSize: 20,
        fontFamily: "Genos-Regular",
        marginVertical: 5
    },
    selectedGenderTitleText: {
        color: "#2796C4"
    },
    unSelectedGenderTitleText: {
        color: "#333333",
        opacity: 0.4
    },
    checkBox: {
        height: 25,
        width: 25,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    checkIcon: {
        height: 12.5,
        width: 12.5
    },
    checkBoxChecked: {
        backgroundColor: "#2796C4"
    },
    checkBoxUnChecked: {
        backgroundColor: "#CDD1D8"
    }
})

GenderOption.propTypes = {
    selectedGender: PropTypes.object.isRequired,
    setSelectedGender: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
