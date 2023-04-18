import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { search_64, tick_32 } from "../../assets/icons";
import Task from "../Components/Task";

const Tasks = () => {
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
							// flex: 0.2,
						}}>
						<Image
							source={search_64}
							style={{ width: 24, height: 24, tintColor: "#fff" }}
						/>
					</TouchableOpacity>
				</View>
			</View>
			{/* task  */}
			<Task />
			<Task />
		</View>
	);
};

export default Tasks;

const styles = StyleSheet.create({});
