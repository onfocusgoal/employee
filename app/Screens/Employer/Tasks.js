import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Task from "../../Components/Task";
import { add_64, search_64 } from "../../../assets/icons";

const Tasks = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const [searchTask, setSearchTask] = useState("");
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#fff",
			}}>
			{/* safe area view  */}
			<View
				style={{
					paddingTop: insets?.top,
					backgroundColor: "dodgerblue",
				}}>
				{/* header  */}
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						padding: 10,
					}}>
					<Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
						Tasks
					</Text>
				</View>
			</View>

			{/* search tab  */}
			<View
				style={{
					paddingHorizontal: 25,
					flexDirection: "row",
					justifyContent: "space-between",
					paddingVertical: 20,
				}}>
				<TextInput
					value={searchTask}
					placeholder="Type here"
					onChangeText={(e) => setSearchTask(e)}
					style={{
						paddingHorizontal: 10,
						paddingVertical: 10,
						fontSize: 15,
					}}
				/>
				<View>
					<TouchableOpacity
						style={{
							padding: 20,
							borderRadius: 45,
							backgroundColor: "dodgerblue",
						}}>
						<Image
							source={search_64}
							style={{ width: 24, height: 24, tintColor: "#fff" }}
						/>
					</TouchableOpacity>
				</View>
			</View>
			{/* task  */}
			<View>
				<Task />
				<Task />
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate("CreateTask")}
				style={{
					position: "absolute",
					right: 20,
					bottom: 20,
					borderRadius: 40,
					backgroundColor: "dodgerblue",
					padding: 20,
				}}>
				<Image
					source={add_64}
					style={{ width: 28, height: 28, tintColor: "#ffffff" }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Tasks;

const styles = StyleSheet.create({});
