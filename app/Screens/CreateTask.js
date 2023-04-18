import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const CreateTask = ({ navigation }) => {
	const [taskInfo, setTaskInfo] = useState({ name: "", description: "" });

	const [tasks, setTasks] = useState([]);
	return (
		<View
			style={{
				padding: 20,
				backgroundColor: "rgb(248,248,248)",
				flex: 1,
				gap: 30,
			}}>
			<View style={{ gap: 15 }}>
				<Text style={{ fontWeight: 500, fontSize: 15 }}>Task Name</Text>
				<TextInput
					value={taskInfo?.name}
					placeholder="Name"
					style={{
						backgroundColor: "#fff",
						borderRadius: 5,
						paddingHorizontal: 20,
						paddingVertical: 15,
					}}
					onChangeText={(e) => setTaskInfo((val) => ({ ...val, name: e }))}
				/>
			</View>

			<TextInput
				value={taskInfo?.description}
				placeholder="Description"
				numberOfLines={2}
				onChangeText={(e) =>
					setTaskInfo((val) => ({ ...val, description: e }))
				}
				style={{
					backgroundColor: "#fff",
					borderRadius: 5,
					paddingHorizontal: 20,
					paddingVertical: 15,
				}}
			/>

			<View
				style={{ position: "absolute", bottom: 40, left: 20, right: 20 }}>
				<TouchableOpacity
					onPress={() => {
						setTasks((val) => [...val, { taskInfo }]);
						setTaskInfo({ name: "", description: "" });
						navigation.goBack();
					}}
					style={{
						backgroundColor: "dodgerblue",
						padding: 20,
						marginHorizontal: 20,
						borderRadius: 5,
					}}>
					<Text
						style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
						Create Task
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CreateTask;

const styles = StyleSheet.create({});
