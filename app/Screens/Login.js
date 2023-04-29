import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/auth/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { setCredentials } from "../redux/auth/authSlice";

const Login = ({ navigation }) => {
	const [loginDetails, setLoginDetails] = useState({
		email: "",
		password: "",
	});
	const [remember, setRemember] = useState(false);
	const [error, setError] = useState(null);

	const dispatch = useDispatch();
	const [login, { loading }] = useLoginMutation();

	const handleSubmit = async () => {
		try {
			const userData = await login({
				...loginDetails,
			}).unwrap();

			await AsyncStorage.setItem("token", userData?.accessToken);

			dispatch(
				setCredentials({
					...userData,
				}),
			);
			navigation.navigate("Home");
		} catch (err) {
			setError(err?.data?.error);
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					padding: 20,
					gap: 25,
					backgroundColor: "rgb(248,248,248)",
					justifyContent: "space-evenly",
					flex: 1,
				}}>
				<View style={{ width: 150, height: 150 }} />
				<View style={{ gap: 15 }}>
					{error && (
						<Text style={{ textAlign: "center", marginVertical: 15 }}>
							{error}
						</Text>
					)}
					<TextInput
						placeholderTextColor="#bbb"
						value={loginDetails?.email}
						onChangeText={(e) =>
							setLoginDetails((value) => ({ ...value, email: e }))
						}
						placeholder="Email"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "#ffffff",
							borderRadius: 10,
						}}
					/>
					<TextInput
						placeholderTextColor="#bbb"
						value={loginDetails?.password}
						onChangeText={(e) =>
							setLoginDetails((value) => ({ ...value, password: e }))
						}
						secureTextEntry={true}
						placeholder="Password"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "#ffffff",
							borderRadius: 10,
						}}
					/>
					<TouchableOpacity
						onPress={() => setRemember(!remember)}
						style={{
							flexDirection: "row",
							gap: 10,
							alignItems: "center",
						}}>
						{/* check box  */}
						<Checkbox
							style={{ width: 15, height: 15 }}
							value={remember}
							onValueChange={setRemember}
						/>
						<Text>Remember Password</Text>
					</TouchableOpacity>
				</View>

				<View style={{ gap: 10 }}>
					<TouchableOpacity
						onPress={handleSubmit}
						style={{ backgroundColor: "dodgerblue", borderRadius: 5 }}>
						<Text
							style={{
								textAlign: "center",
								color: "#ffffff",
								paddingHorizontal: 20,
								paddingVertical: 15,
								fontSize: 15,
							}}>
							Sign In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ backgroundColor: "#ffffff", borderRadius: 5 }}>
						<Text
							style={{
								textAlign: "center",
								paddingHorizontal: 20,
								paddingVertical: 15,
								fontSize: 14,
							}}>
							Continue with Facebook
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ backgroundColor: "#ffffff", borderRadius: 5 }}>
						<Text
							style={{
								textAlign: "center",
								paddingHorizontal: 20,
								paddingVertical: 15,
								fontSize: 14,
							}}>
							Employer Signin
						</Text>
					</TouchableOpacity>
				</View>

				<View>
					<TouchableOpacity
						onPress={() => navigation.navigate("SignUp")}
						style={{ backgroundColor: "#fff", borderRadius: 5 }}>
						<Text
							style={{
								textAlign: "center",
								paddingHorizontal: 20,
								paddingVertical: 15,
								fontSize: 14,
							}}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({});
