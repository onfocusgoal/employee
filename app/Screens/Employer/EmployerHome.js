import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Attendance from "./Attendance";
import Account from "./Account";
import Tasks from "./Tasks";
import { tick_32, todo_32, userSquare_32 } from "../../../assets/icons";
import { useEffect } from "react";
import axios from "axios";

const MaterialTabs = createMaterialTopTabNavigator();

const EmployerHome = () => {
	const insets = useSafeAreaInsets();
	// const [searchUser, setSearchUser] = useState("");s

	return (
		<View style={{ flex: 1 }}>
			<MaterialTabs.Navigator
				screenOptions={{
					tabBarStyle: { backgroundColor: "dodgerblue" },
					tabBarInactiveTintColor: "#fff",
				}}
				tabBarPosition="bottom">
				<MaterialTabs.Screen
					name="Attendance"
					component={Attendance}
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

export default EmployerHome;

const styles = StyleSheet.create({});
