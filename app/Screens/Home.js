import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Feed from "./Feed";
import Leave from "./Leave";
import Tasks from "./Tasks";
import Account from "./Account";
import {
	calender_32,
	tick_32,
	todo_32,
	userSquare_32,
} from "../../assets/icons";

const MaterialTabs = createMaterialTopTabNavigator();

const Home = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<View style={{ flex: 1 }}>
			<MaterialTabs.Navigator
				initialRouteName="Feed"
				tabBarPosition="bottom"
				style={{ flex: 1 }}
				screenOptions={{
					tabBarStyle: { backgroundColor: "dodgerblue" },
					tabBarInactiveTintColor: "#fff",
				}}>
				<MaterialTabs.Screen
					name="Feed"
					component={Feed}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={tick_32}
								style={{
									width: 22,
									height: 22,
									tintColor: "#fff",
									alignSelf: "center",
								}}
							/>
						),
					}}
				/>
				<MaterialTabs.Screen
					name="Leave"
					component={Leave}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={calender_32}
								style={{
									width: 22,
									height: 22,
									tintColor: "#fff",
									alignSelf: "center",
								}}
							/>
						),
					}}
				/>
				<MaterialTabs.Screen
					name="Tasks"
					component={Tasks}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={todo_32}
								style={{
									width: 22,
									height: 22,
									tintColor: "#fff",
									alignSelf: "center",
								}}
							/>
						),
					}}
				/>
				<MaterialTabs.Screen
					name="Account"
					component={Account}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={userSquare_32}
								style={{
									width: 26,
									height: 26,
									tintColor: "#fff",
									alignSelf: "center",
								}}
							/>
						),
					}}
				/>
			</MaterialTabs.Navigator>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
