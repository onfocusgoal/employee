import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { search_64 } from "../../../assets/icons";
import EmployerHomeCard from "../../Components/EmployerHomeCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";

const Attendance = () => {
	const insets = useSafeAreaInsets();
	const [searchUser, setSearchUser] = useState("");

	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			const users = await axios.get(
				`https://employee-backend-production.up.railway.app/api/users`,
			);
			setUsers(users.data.users);
		} catch (error) {
			console.log("erorr: ", error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "rgb(248,248,248)",
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
						Attendance
					</Text>
				</View>
			</View>
			{/* search box  */}
			<View style={{ backgroundColor: "dodgerblue", padding: 20 }}>
				<View
					style={{
						backgroundColor: "#fff",
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 10,
						paddingHorizontal: 20,
						borderRadius: 5,
					}}>
					<TextInput
						value={searchUser}
						placeholder="Search for message or user here"
						onChangeText={(e) => setSearchUser(e)}
						style={{ flex: 1 }}
					/>
					<Image
						source={search_64}
						style={{ width: 18, height: 18, tintColor: "#bbbbbb" }}
					/>
				</View>
			</View>

			{/* employerhomecards */}
			<View
				style={{
					padding: 20,
					flexDirection: "row",
					gap: 10,
					flexWrap: "wrap",
					justifyContent: "space-between",
				}}>
				{users?.map((item, index) => (
					<EmployerHomeCard item={item} key={index} />
				))}
			</View>
		</View>
	);
};

export default Attendance;

const styles = StyleSheet.create({});
