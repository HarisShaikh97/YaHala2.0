import React from "react"
import { View, Platform, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/login/Login"
import ResetPassword from "./screens/reset-password/ResetPassword"
import VerificationCode from "./screens/verification-code/VerificationCode"
import CreatePassword from "./screens/create-password/CreatePassword"
import SelectLanguage from "./screens/select-language/SelectLanguage"
import SignUpSelectLanguage from "./screens/sign-up-select-language/SignUpSelectLanguage"
import SelectGender from "./screens/select-gender/SelectGender"
import SignUpCamera from "./screens/sign-up-camera/SignUpCamera"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="login"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen
                        name="reset-password"
                        component={ResetPassword}
                    />
                    <Stack.Screen
                        name="verification-code"
                        component={VerificationCode}
                    />
                    <Stack.Screen
                        name="create-password"
                        component={CreatePassword}
                    />
                    <Stack.Screen
                        name="select-language"
                        component={SelectLanguage}
                    />
                    <Stack.Screen
                        name="sign-up-select-language"
                        component={SignUpSelectLanguage}
                    />
                    <Stack.Screen
                        name="sign-up-select-gender"
                        component={SelectGender}
                    />
                    <Stack.Screen
                        name="sign-up-camera"
                        component={SignUpCamera}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 0 : 35,
        backgroundColor: "#F2F2F2"
    }
})
