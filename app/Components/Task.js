import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { tick_32 } from "../../assets/icons";

const Task = () => {
	return (
		<View
			style={{
				paddingHorizontal: 20,
				paddingVertical: 20,
				flexDirection: "row",
				gap: 15,
				borderBottomColor: "#dddddd",
				borderBottomWidth: 1,
			}}>
			{/* image or empty circle  */}
			<View>
				<View
					style={{
						width: 46,
						height: 46,
						borderRadius: 30,
						backgroundColor: "#eee",
					}}
				/>
			</View>

			<View style={{ gap: 5, flex: 1 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<Text style={{ fontSize: 15, fontWeight: 500 }}>Task 1</Text>
					<View style={{ gap: 10, flexDirection: "row" }}>
						<Image
							source={tick_32}
							style={{
								width: 16,
								height: 16,
								tintColor: "dodgerblue",
							}}
						/>
						<Text>14:22</Text>
					</View>
				</View>
				<Text style={{}}>
					Lorem Ipsum is some text. this is some text. Lorem Ipsum is some
					text. this is some text. Lorem Ipsum is some text. this is some
					text. Lorem Ipsum is some text. this is some text.{" "}
				</Text>
			</View>
		</View>
	);
};

export default Task;

const styles = StyleSheet.create({});
