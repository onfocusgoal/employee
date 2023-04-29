import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import IsAuth from "./app/Components/IsAuth";
import Navigator from "./app/Components/Navigator";
import { store } from "./app/redux/store";

export default function App() {
	// account = 'Employer' | 'UI Designer' | etc
	return (
		<Provider store={store}>
			<IsAuth>
				<View style={styles.container}>
					<Navigator />
					<StatusBar style="auto" />
				</View>
			</IsAuth>
		</Provider>
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
