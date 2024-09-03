import React, { useState } from "react"
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import PropTypes from "prop-types"
import ScreenHeader from "../screen-header/ScreenHeader"
import SignUpBackButton from "../sign-up-back-button/SignUpBackButton"
import SignUpNextButton from "../sign-up-next-button/SignUpNextButton"

export default function YourInformationModal({ openModal, setOpenModal }) {
    const navigation = useNavigation()

    const statuses = [
        {
            id: 1,
            title: "Single",
            image: require("../../assets/icons/single.png")
        },
        {
            id: 2,
            title: "Engaged",
            image: require("../../assets/icons/engaged.png")
        },
        {
            id: 3,
            title: "Married",
            image: require("../../assets/icons/married.png")
        }
    ]

    const [selectedStatus, setSelectedStatus] = useState(statuses[2])

    return (
        <Modal
            animationType="slide"
            transparent
            visible={openModal}
            onRequestClose={() => {
                setOpenModal(false)
            }}
        >
            <View style={styles.modalWrapper}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBodyContainer}>
                        <ScreenHeader title="Your Information" />
                        <View
                            style={[styles.sectionBox, styles.birthdaySection]}
                        >
                            <View style={styles.birthdaySectionHeaderWrapper}>
                                <View style={styles.sectionTitleContainer}>
                                    <View style={styles.circularSeparator} />
                                    <Text style={styles.sectionTitleText}>
                                        Your Birthday
                                    </Text>
                                    <View style={styles.circularSeparator} />
                                </View>
                                <View style={styles.horizontalSeparator} />
                            </View>
                            <View style={styles.birthdaySectionBodyContainer}>
                                <Text style={styles.birthdaySectionBodyText}>
                                    Use that design what we have in the App
                                </Text>
                            </View>
                            <View style={styles.informationBox}>
                                <Image
                                    source={require("../../assets/icons/information.png")}
                                    style={styles.informationIcon}
                                    resizeMode="contain"
                                />
                                <View
                                    style={styles.informationBoxTextContainer}
                                >
                                    <Text
                                        style={styles.informationBoxTitleText}
                                    >
                                        Information
                                    </Text>
                                    <Text
                                        style={
                                            styles.informationBoxDescriptionText
                                        }
                                    >
                                        You must be at least 16 years old
                                    </Text>
                                </View>
                                <View style={styles.emptyView} />
                            </View>
                        </View>
                        <View style={[styles.sectionBox, styles.statusSection]}>
                            <View style={styles.sectionTitleContainer}>
                                <View style={styles.circularSeparator} />
                                <Text style={styles.sectionTitleText}>
                                    Your Status
                                </Text>
                                <View style={styles.circularSeparator} />
                            </View>
                            <View style={styles.statusOptionsWrapper}>
                                {statuses?.map((item, key) => {
                                    return (
                                        <TouchableOpacity
                                            style={[
                                                styles.statusOptionContainer,
                                                selectedStatus?.id === item?.id
                                                    ? styles.statusOptionSelected
                                                    : styles.statusOptionUnSelected
                                            ]}
                                            onPress={() => {
                                                setSelectedStatus(item)
                                            }}
                                            key={key}
                                        >
                                            <Image
                                                source={item?.image}
                                                style={styles.statusOptionIcon}
                                                resizeMode="contain"
                                            />
                                            <View
                                                style={
                                                    styles.statusOptionTitleContainer
                                                }
                                            >
                                                <View
                                                    style={
                                                        selectedStatus?.id ===
                                                        item?.id
                                                            ? styles.selectedCircularSeparator
                                                            : styles.unSelectedCircularSeparator
                                                    }
                                                />
                                                <Text
                                                    style={[
                                                        styles.statusOptionTitleText,
                                                        selectedStatus?.id ===
                                                        item?.id
                                                            ? styles.selectedStatusOptionTitleText
                                                            : styles.unSelectedStatusOptionTitleText
                                                    ]}
                                                >
                                                    {item?.title}
                                                </Text>
                                                <View
                                                    style={
                                                        selectedStatus?.id ===
                                                        item?.id
                                                            ? styles.selectedCircularSeparator
                                                            : styles.unSelectedCircularSeparator
                                                    }
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={styles.actionButtonsWrapper}>
                        <SignUpBackButton
                            onPress={() => {
                                setOpenModal(false)
                            }}
                        />
                        <SignUpNextButton
                            onPress={() => {
                                setOpenModal(false)
                                navigation.navigate("sign-up-select-location")
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#F0F0F0",
        paddingTop: 15
    },
    modalBodyContainer: {
        flexDirection: "column",
        width: "90%",
        gap: 15
    },
    sectionBox: {
        width: "100%",
        borderRadius: 7.5,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "column"
    },
    birthdaySection: {
        height: 200
    },
    birthdaySectionHeaderWrapper: {
        width: "100%",
        flexDirection: "column",
        gap: 5
    },
    sectionTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    sectionTitleText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "#1C274C",
        opacity: 0.6,
        lineHeight: 17.5
    },
    horizontalSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#1C274C",
        opacity: 0.1
    },
    circularSeparator: {
        height: 3,
        width: 3,
        borderRadius: 1.5,
        backgroundColor: "#1C274C",
        opacity: 0.6
    },
    selectedCircularSeparator: {
        height: 3,
        width: 3,
        borderRadius: 1.5,
        backgroundColor: "#2796C4"
    },
    unSelectedCircularSeparator: {
        height: 3,
        width: 3,
        borderRadius: 1.5,
        backgroundColor: "#1C274C",
        opacity: 0.4
    },
    birthdaySectionBodyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    birthdaySectionBodyText: {
        fontSize: 20,
        fontFamily: "Genos-Medium",
        color: "#333333",
        textAlign: "center",
        width: 200
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
    informationBoxDescriptionText: {
        fontSize: 12.5,
        fontFamily: "Genos-Regular",
        color: "#1C274C"
    },
    emptyView: {
        width: 25
    },
    statusSection: {
        height: 135
    },
    statusOptionsWrapper: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 7.5
    },
    statusOptionContainer: {
        height: "100%",
        width: "31%",
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    statusOptionSelected: {
        borderColor: "#2796C4"
    },
    statusOptionUnSelected: {
        borderColor: "rgba(28, 39, 76, 0.2)"
    },
    statusOptionIcon: {
        height: 35,
        width: 35
    },
    statusOptionTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7.5
    },
    statusOptionTitleText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        lineHeight: 17.5
    },
    selectedStatusOptionTitleText: {
        color: "#2796C4"
    },
    unSelectedStatusOptionTitleText: {
        color: "#1C274C",
        opacity: 0.4
    },
    actionButtonsWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginVertical: 35
    }
})

YourInformationModal.propTypes = {
    openModal: PropTypes.bool.isRequired,
    setOpenModal: PropTypes.func.isRequired
}
