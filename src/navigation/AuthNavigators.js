import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegistrationScreen, Startup } from "../screens";

const Stack = createStackNavigator();

const AuthNavigators = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                detachPreviousScreen: false,
                presentation: "transparentModal",
            }}
        >
            <Stack.Screen name="Startup" component={Startup} options={{ animationEnabled: false }} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
    );
};
export default AuthNavigators;
