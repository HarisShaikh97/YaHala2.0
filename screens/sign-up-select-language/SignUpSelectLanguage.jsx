import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LanguageSearchBar from "../../components/language-search-bar/LanguageSearchBar"
import LanguageOption from "../../components/language-option/LanguageOption"
import FormButton from "../../components/form-button/FormButton"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function SignUpSelectLanguage() {
    const navigation = useNavigation()

    const languages = [
        {
            id: 1,
            title: "English",
            image: require("../../assets/images/english.png")
        },
        {
            id: 2,
            title: "Indonesian",
            image: require("../../assets/images/indonesian.png")
        },
        {
            id: 3,
            title: "Japanese",
            image: require("../../assets/images/japanese.png")
        },
        {
            id: 4,
            title: "French",
            image: require("../../assets/images/french.png")
        },
        {
            id: 5,
            title: "Chinese",
            image: require("../../assets/images/chinese.png")
        }
    ]

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.headerTitleText}>Language</Text>
                <View style={styles.bodyContainer}>
                    <LanguageSearchBar />
                    <View style={styles.listContainer}>
                        {languages?.map((item, key) => {
                            return (
                                <LanguageOption
                                    selectedLanguage={selectedLanguage}
                                    setSelectedLanguage={setSelectedLanguage}
                                    item={item}
                                    key={key}
                                />
                            )
                        })}
                    </View>
                </View>
                <FormButton
                    title="Save Changes"
                    onPress={() => {
                        navigation.navigate("sign-up-select-gender")
                    }}
                />
            </View>
            <FooterNav />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 50
    },
    headerTitleText: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        lineHeight: 27.5
    },
    bodyContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 35,
        gap: 25
    },
    listContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 15,
        marginBottom: 50
    }
})
