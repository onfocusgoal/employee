import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { Checkbox } from "expo-checkbox";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRegisterMutation } from "../redux/auth/register";
import { setCredentials } from "../redux/auth/authSlice";

const SignUp = ({ navigation }) => {
	const [signUpDetails, setSignUpDetails] = useState({
		name: "",
		email: "",
		field: "",
		password: "",
		role: 0,
	});
	const [isEmployer, setIsEmployer] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const [register, { loading }] = useRegisterMutation();

	const handleRegister = async () => {
		try {
			const userData = await register({
				...signUpDetails,
				role: isEmployer ? 1 : 0,
			}).unwrap();
			await AsyncStorage.setItem("token", userData.accessToken);

			dispatch(setCredentials({ ...userData }));
			navigation.navigate("Home");
		} catch (error) {
			console.log("error register: ", error);
			setError(error?.data?.message);
		}
	};

	return (
		<View
			style={{
				padding: 20,
				backgroundColor: "rgb(248,248,248)",
				justifyContent: "space-between",
				flex: 1,
			}}>
			<View style={{ width: 150, height: 150 }} />
			<View style={{ gap: 15 }}>
				<TextInput
					placeholderTextColor="#bbb"
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						backgroundColor: "#fff",
						borderRadius: 10,
					}}
					value={signUpDetails?.name}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({ ...value, name: e }))
					}
					placeholder="Full name"
				/>
				<TextInput
					placeholderTextColor="#bbb"
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						backgroundColor: "#fff",
						borderRadius: 10,
					}}
					value={signUpDetails?.field}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({ ...value, field: e }))
					}
					placeholder="Field Type"
				/>
				<TextInput
					placeholderTextColor="#bbb"
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						backgroundColor: "#fff",
						borderRadius: 10,
					}}
					value={signUpDetails?.email}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({ ...value, email: e }))
					}
					placeholder="Email"
				/>
				<TextInput
					placeholderTextColor="#bbb"
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						backgroundColor: "#fff",
						borderRadius: 10,
					}}
					secureTextEntry={true}
					value={signUpDetails?.password}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({ ...value, password: e }))
					}
					placeholder="Password"
				/>

				<TouchableOpacity
					onPress={() => setIsEmployer(!isEmployer)}
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 15,
						justifyContent: "space-between",
					}}>
					<Text>is it employer account? </Text>
					<Checkbox
						style={{ width: 16, height: 16 }}
						value={isEmployer}
						onValueChange={setIsEmployer}
					/>
				</TouchableOpacity>
			</View>

			<View style={{ gap: 20 }}>
				<TouchableOpacity
					onPress={handleRegister}
					style={{
						paddingHorizontal: 20,
						paddingVertical: 20,
						backgroundColor: "dodgerblue",
						borderRadius: 5,
					}}>
					<Text
						style={{ fontSize: 15, color: "#fff", textAlign: "center" }}>
						Sign Up
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={{ textAlign: "center" }}>
						Already have an account?{" "}
						<Text style={{ fontWeight: 500 }}>Sign In</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
