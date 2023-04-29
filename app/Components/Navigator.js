import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import EmployerHome from "../Screens/Employer/EmployerHome";
import CreateTask from "../Screens/CreateTask";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSlice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigator = () => {
	const user = useSelector(selectUser);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{user?.role === "1" ? (
					<Stack.Screen
						name="EmployerHome"
						component={EmployerHome}
						options={{ headerShown: false }}
					/>
				) : (
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
				)}

				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerTitleAlign: "center",
						headerTintColor: "#fff",
						headerStyle: { backgroundColor: "dodgerblue" },
					}}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUp}
					options={{
						headerTitleAlign: "center",
						headerTitle: "Sign Up",
						headerTintColor: "#fff",
						headerStyle: { backgroundColor: "dodgerblue" },
					}}
				/>

				<Stack.Screen
					name="CreateTask"
					component={CreateTask}
					options={{
						headerShown: true,
						headerBackButtonMenuEnabled: true,
						headerTitleAlign: "center",
						headerTintColor: "#ffffff",
						headerStyle: { backgroundColor: "dodgerblue" },
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;

const styles = StyleSheet.create({});
