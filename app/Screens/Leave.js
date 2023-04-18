import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import AnimatedTextInput from "react-native-animated-placeholder-textinput";

const Leave = () => {
	const [leaveTypeData, setLeaveTypeData] = useState({
		leaveType: "",
		message: "",
	});
	const [selectedDate, setSelectedDate] = useState("");
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{
				flex: 1,
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
						Leave
					</Text>
				</View>
			</View>

			<View>
				<Calendar
					current={selectedDate}
					onDayPress={(day) => {
						setSelectedDate(day.dateString);
					}}
				/>
			</View>

			<View style={{ paddingHorizontal: 20, paddingVertical: 20, gap: 20 }}>
				<View style={{ backgroundColor: "#fff" }}>
					<AnimatedTextInput
						placeholder="Leave Type"
						value={leaveTypeData?.leaveType}
						textInputProps={{
							placeholderTextColor: "dodgerblue",
							style: { paddingHorizontal: 20 },
						}}
						borderColor="dodgerblue"
						onChangeText={(data) =>
							setLeaveTypeData((oldData) => ({
								...oldData,
								leaveType: data,
							}))
						}
					/>
				</View>
				<View style={{ backgroundColor: "#fff" }}>
					<TextInput
						placeholder="Your Message"
						value={leaveTypeData?.message}
						numberOfLines={5}
						style={{
							paddingHorizontal: 15,
							paddingVertical: 10,
							paddingBottom: 60,
						}}
						onChangeText={(data) =>
							setLeaveTypeData((prevData) => ({
								...prevData,
								message: data,
							}))
						}
					/>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<TouchableOpacity
					style={{
						backgroundColor: "dodgerblue",
						paddingVertical: 15,
						paddingHorizontal: 20,
						borderRadius: 40,
					}}>
					<Text style={{ textAlign: "center", color: "#fff" }}>
						Request
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Leave;

const styles = StyleSheet.create({});
