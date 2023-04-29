import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CreateTask from "./app/Screens/CreateTask";
import EmployerHome from "./app/Screens/Employer/EmployerHome";
import Home from "./app/Screens/Home";
import Login from "./app/Screens/Login";
import SignUp from "./app/Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
	// account = 'Employer' | 'UI Designer' | etc
	const [accountType, setAccountType] = useState("Employer");
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={
						accountType === "Employer" ? "EmployerHome" : "Home"
					}>
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
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="EmployerHome"
						component={EmployerHome}
						options={{ headerShown: false }}
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
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
