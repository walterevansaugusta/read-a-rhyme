import React, {useContext} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {UserDashboardScreen} from "../screens/UserDashboardScreen";
import {ShopScreen} from "../screens/ShopScreen";
import {ReadingScreen} from "../screens/ReadingScreen";
import {AuthContext} from "./AuthContext";
import {LoginScreen} from "../screens/LoginScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const AppNavigator = () => {
    const { hasUser } = useContext(AuthContext);

    if(hasUser) {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="User Dashboard" component={UserDashboardScreen} />
                <Drawer.Screen name="Shop" component={ShopScreen} />
                <Drawer.Screen name="Reading" component={ReadingScreen} />
            </Drawer.Navigator>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        )
    }


};