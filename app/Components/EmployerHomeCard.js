import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { clock_24 } from "../../assets/icons";

const EmployerHomeCard = () => {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				gap: 10,
				minWidth: 150,
				flex: 1,
				paddingBottom: 10,
				borderRadius: 5,
			}}>
			<View
				style={{
					height: 170,
					backgroundColor: "#bbbbbb",
				}}
			/>
			<Text style={{ paddingHorizontal: 10 }}>John</Text>
			<View
				style={{
					flexDirection: "row",
					gap: 10,
					alignItems: "center",
					paddingHorizontal: 10,
				}}>
				<Image
					source={clock_24}
					style={{ width: 14, height: 14, tintColor: "#ccc" }}
				/>
				<Text style={{ color: "#ccc" }}>Present</Text>
			</View>
		</View>
	);
};

export default EmployerHomeCard;

const styles = StyleSheet.create({});
