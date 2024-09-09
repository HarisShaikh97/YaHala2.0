import React, { useState, useEffect } from "react"
import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    Platform,
    StyleSheet
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {
    Camera,
    useCameraDevice,
    useCameraPermission
} from "react-native-vision-camera"
import SignUpNextButton from "../../components/sign-up-next-button/SignUpNextButton"
import SignUpBackButton from "../../components/sign-up-back-button/SignUpBackButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function SignUpCamera() {
    const navigation = useNavigation()

    const filters = [
        {
            id: 1,
            image: require("../../assets/icons/filter-1.png")
        },
        {
            id: 2,
            image: require("../../assets/icons/filter-2.png")
        },
        {
            id: 3,
            image: require("../../assets/icons/filter-3.png")
        },
        {
            id: 4,
            image: require("../../assets/icons/filter-4.png")
        },
        {
            id: 5,
            image: require("../../assets/icons/filter-5.png")
        },
        {
            id: 6,
            image: require("../../assets/icons/filter-6.png")
        },
        {
            id: 7,
            image: require("../../assets/icons/filter-7.png")
        },
        {
            id: 8,
            image: require("../../assets/icons/filter-8.png")
        }
    ]

    const [selectedFilter, setSelectedFilter] = useState(filters[3])

    const device = useCameraDevice("back")
    const { hasPermission, requestPermission } = useCameraPermission()

    useEffect(() => {
        ;(async () => {
            if (!hasPermission) {
                await requestPermission()
            }
        })()
    }, [hasPermission, requestPermission])

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.overlayContainer}>
                    <TouchableOpacity style={styles.backButtonContainer}>
                        <Image
                            source={require("../../assets/icons/back-2.png")}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <View style={styles.cameraOptionsWrapper}>
                        <ScrollView
                            style={styles.filtersScrollView}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.filtersContainer}>
                                {filters?.map((item, key) => {
                                    return (
                                        <TouchableOpacity
                                            key={key}
                                            onPress={() => {
                                                setSelectedFilter(item)
                                            }}
                                        >
                                            <ImageBackground
                                                source={item?.image}
                                                style={styles.filterImage}
                                                resizeMode="cover"
                                            >
                                                {selectedFilter?.id ===
                                                    item?.id && (
                                                    <Image
                                                        source={require("../../assets/icons/check-white.png")}
                                                        style={styles.checkIcon}
                                                        resizeMode="contain"
                                                    />
                                                )}
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                        <View style={styles.cameraButtonsContainer}>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/gallery.png")}
                                    style={styles.cameraOptionIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.captureButtonWrapper}
                            >
                                <View style={styles.captureButtonContainer}>
                                    <Image
                                        source={require("../../assets/icons/camera.png")}
                                        style={styles.cameraIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/switch-camera.png")}
                                    style={styles.cameraOptionIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionButtonsWrapper}>
                            <SignUpBackButton
                                onPress={() => {
                                    navigation.goBack()
                                }}
                            />
                            <SignUpNextButton
                                onPress={() => {
                                    navigation.navigate("sign-up-user-details")
                                }}
                            />
                        </View>
                    </View>
                </View>
                {device && hasPermission ? (
                    <Camera
                        style={styles.cameraView}
                        device={device}
                        isActive={true}
                    />
                ) : (
                    <Image
                        source={require("../../assets/images/camera-view.png")}
                        style={styles.cameraView}
                        resizeMode="cover"
                    />
                )}
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
        position: "relative"
    },
    cameraView: {
        flex: 1,
        width: "100%",
        zIndex: 0
    },
    overlayContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? 25 : 50,
        zIndex: 10
    },
    backButtonContainer: {
        height: 40,
        width: 40,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 20,
        marginLeft: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    backIcon: {
        height: 35,
        width: 35
    },
    filtersScrollView: {
        maxHeight: 50
    },
    filtersContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        gap: 10
    },
    filterImage: {
        height: 45,
        width: 45,
        borderRadius: 7.5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    checkIcon: {
        height: 20,
        width: 20
    },
    cameraOptionsWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: "column"
    },
    cameraButtonsContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    cameraOptionIcon: {
        height: 30,
        width: 30
    },
    captureButtonWrapper: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "rgba(39, 150, 196, 0.46)",
        alignItems: "center",
        justifyContent: "center"
    },
    captureButtonContainer: {
        height: 55,
        width: 55,
        borderRadius: 25,
        backgroundColor: "rgba(39, 150, 196, 1)",
        alignItems: "center",
        justifyContent: "center"
    },
    cameraIcon: {
        height: 30,
        width: 30
    },
    actionButtonsWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginVertical: 25
    }
})
