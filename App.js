import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";
import SignUp from "./src/SignUp";
import Home from "./src/Home";
import Start from "./src/Start";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false, headerBackAccessibilityLabel: false, headerLeft: () => null }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
