import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/login/Login"
import ResetPassword from "./screens/reset-password/ResetPassword"
import VerificationCode from "./screens/verification-code/VerificationCode"
import CreatePassword from "./screens/create-password/CreatePassword"
import SelectLanguage from "./screens/select-language/SelectLanguage"
import SignUpSelectLanguage from "./screens/sign-up-select-language/SignUpSelectLanguage"
import SignUpSelectGender from "./screens/sign-up-select-gender/SignUpSelectGender"
import SignUpCamera from "./screens/sign-up-camera/SignUpCamera"
import SignUpUserDetails from "./screens/sign-up-user-details/SignUpUserDetails"
import SignUpSelectLocation from "./screens/sign-up-select-location/SignUpSelectLocation"
import SignUpCompleteRegistration from "./screens/sign-up-complete-registration/SignUpCompleteRegistration"
import SignUpVerificationCode from "./screens/sign-up-verification-code/SignUpVerificationCode"
import SignUpAccountCreated from "./screens/sign-up-account-created/SignUpAccountCreated"
import Home from "./screens/home/Home"
import PolicyAndTermsList from "./screens/policy-and-terms-list/PolicyAndTermsList"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="reset-password" component={ResetPassword} />
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
                    component={SignUpSelectGender}
                />
                <Stack.Screen name="sign-up-camera" component={SignUpCamera} />
                <Stack.Screen
                    name="sign-up-user-details"
                    component={SignUpUserDetails}
                />
                <Stack.Screen
                    name="sign-up-select-location"
                    component={SignUpSelectLocation}
                />
                <Stack.Screen
                    name="sign-up-complete-registration"
                    component={SignUpCompleteRegistration}
                />
                <Stack.Screen
                    name="sign-up-verification-code"
                    component={SignUpVerificationCode}
                />
                <Stack.Screen
                    name="sign-up-account-created"
                    component={SignUpAccountCreated}
                />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen
                    name="policy-and-terms-list"
                    component={PolicyAndTermsList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
