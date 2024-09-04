import React from "react"
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import ScreenHeader from "../../components/screen-header/ScreenHeader"
import SignUpBackButton from "../../components/sign-up-back-button/SignUpBackButton"
import SignUpNextButton from "../../components/sign-up-next-button/SignUpNextButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function SignUpSelectLocation() {
    const navigation = useNavigation()

    const addresses = [
        {
            id: 1,
            address: "428 Greenwich Ave",
            city: "Brooklyn, NY"
        },
        {
            id: 2,
            address: "285 Greenwich Village",
            city: "Hermosa Beach, CA"
        },
        {
            id: 3,
            address: "89 Greenwich Drive",
            city: "Manhattan, NY"
        },
        {
            id: 4,
            address: "428 Greenwich Ave",
            city: "Brooklyn, NY"
        },
        {
            id: 5,
            address: "285 Greenwich Village",
            city: "Hermosa Beach, CA"
        },
        {
            id: 6,
            address: "89 Greenwich Drive",
            city: "Manhattan, NY"
        },
        {
            id: 7,
            address: "428 Greenwich Ave",
            city: "Brooklyn, NY"
        },
        {
            id: 8,
            address: "285 Greenwich Village",
            city: "Hermosa Beach, CA"
        },
        {
            id: 9,
            address: "89 Greenwich Drive",
            city: "Manhattan, NY"
        },
        {
            id: 10,
            address: "428 Greenwich Ave",
            city: "Brooklyn, NY"
        }
    ]

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <ScreenHeader title="Search Location" />
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.searchBarWrapper}>
                        <Text style={styles.searchBarTitleText}>Location</Text>
                        <View style={styles.searchBarContainer}>
                            <Image
                                source={require("../../assets/icons/search-2.png")}
                                style={styles.searchIcon}
                                resizeMode="contain"
                            />
                            <TextInput
                                style={styles.searchBarInput}
                                placeholder="Search..."
                                placeholderTextColor={"#C4C4C4"}
                            />
                            <TouchableOpacity style={styles.crossButton}>
                                <Image
                                    source={require("../../assets/icons/cross.png")}
                                    style={styles.crossIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.currentLocationButton}>
                        <Image
                            source={require("../../assets/icons/navigation.png")}
                            style={styles.currentLocationIcon}
                            resizeMode="cover"
                        />
                        <Text style={styles.currentLocationText}>
                            Current location
                        </Text>
                    </TouchableOpacity>
                    <Image
                        source={require("../../assets/images/map-view.png")}
                        style={styles.mapView}
                        resizeMode="contain"
                    />
                    <View style={styles.addressTitleWrapper}>
                        <Text style={styles.addressTitleText}>Address</Text>
                    </View>
                    <ScrollView
                        style={styles.addressListScrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.addressListContainer}>
                            {addresses?.map((item, key) => {
                                return (
                                    <View
                                        style={styles.addressListItemWrapper}
                                        key={key}
                                    >
                                        <View
                                            style={
                                                styles.addressListItemContainer
                                            }
                                        >
                                            <View
                                                style={
                                                    styles.addressDetailsWrapper
                                                }
                                            >
                                                <View
                                                    style={
                                                        styles.addressDetailHorizontalWrapper
                                                    }
                                                >
                                                    <Image
                                                        source={require("../../assets/icons/location.png")}
                                                        style={
                                                            styles.addressIcon
                                                        }
                                                        resizeMode="contain"
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.addressNameText,
                                                            styles.addressText
                                                        ]}
                                                    >
                                                        {item?.address}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={
                                                        styles.addressDetailHorizontalWrapper
                                                    }
                                                >
                                                    <View
                                                        style={
                                                            styles.addressListEmptyView
                                                        }
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.addressCityText,
                                                            styles.addressText
                                                        ]}
                                                    >
                                                        {item?.city}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Image
                                                source={require("../../assets/icons/next.png")}
                                                style={styles.addressIcon}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        {key < addresses?.length - 1 && (
                                            <View
                                                style={
                                                    styles.horizontalSeparator
                                                }
                                            />
                                        )}
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.actionButtonsWrapper}>
                    <SignUpBackButton
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />
                    <SignUpNextButton
                        onPress={() => {
                            navigation.navigate("sign-up-complete-registration")
                        }}
                    />
                </View>
            </View>
            <FooterNav />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 50,
        gap: 15
    },
    headerWrapper: {
        width: "100%",
        paddingHorizontal: 20
    },
    bodyContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 15
    },
    searchBarWrapper: {
        width: "90%",
        flexDirection: "column",
        gap: 10
    },
    searchBarTitleText: {
        fontSize: 17.5,
        fontFamily: "Genos-Regular",
        color: "#9796A1"
    },
    searchBarContainer: {
        height: 45,
        width: "100%",
        borderRadius: 7.5,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 10
    },
    searchIcon: {
        height: 20,
        width: 20
    },
    searchBarInput: {
        flex: 1,
        fontSize: 17.5,
        fontFamily: "Genos-Light",
        lineHeight: 20
    },
    crossButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "#F9F9FF",
        alignItems: "center",
        justifyContent: "center"
    },
    crossIcon: {
        height: 12.5,
        width: 12.5
    },
    currentLocationButton: {
        height: 30,
        borderRadius: 6.5,
        borderWidth: 1,
        borderColor: "rgba(95, 156, 227, 0.2)",
        backgroundColor: "rgba(95, 156, 227, 0.05)",
        flexDirection: "row",
        gap: 7.5,
        alignItems: "center",
        paddingHorizontal: 5
    },
    currentLocationIcon: {
        height: 20,
        width: 20,
        borderRadius: 10,
        overflow: "hidden"
    },
    currentLocationText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "rgba(95, 156, 227, 1)",
        lineHeight: 17.5
    },
    mapView: {
        height: 175,
        width: "100%",
        overflow: "hidden"
    },
    addressTitleWrapper: {
        width: "90%"
    },
    addressTitleText: {
        fontSize: 20,
        fontFamily: "Genos-Medium"
    },
    addressListScrollView: {
        flex: 1,
        width: "90%"
    },
    addressListContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 10
    },
    addressListItemWrapper: {
        width: "100%",
        flexDirection: "column"
    },
    addressListItemContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    addressDetailsWrapper: {
        flexDirection: "column",
        gap: 5
    },
    addressDetailHorizontalWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    addressIcon: {
        height: 20,
        width: 20
    },
    addressText: {
        fontFamily: "Genos-Regular",
        color: "#1C274C",
        opacity: 0.6
    },
    addressNameText: {
        fontSize: 20,
        lineHeight: 22.5
    },
    addressCityText: {
        fontSize: 15,
        lineHeight: 17.5
    },
    addressListEmptyView: {
        width: 20
    },
    horizontalSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#1C274C",
        opacity: 0.1,
        marginVertical: 5
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
