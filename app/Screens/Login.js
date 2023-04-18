import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";

const Login = () => {
	const [loginDetails, setLoginDetails] = useState({
		username: "",
		password: "",
	});
	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
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
					<TextInput
						placeholderTextColor="#bbb"
						value={loginDetails?.username}
						onChangeText={(e) =>
							setLoginDetails((value) => ({ ...value, username: e }))
						}
						placeholder="Username"
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
						placeholder="Password"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "#ffffff",
							borderRadius: 10,
						}}
					/>
					<View>
						{/* check box  */}
						<Text>Remember Password</Text>
					</View>
				</View>

				<View style={{ gap: 10 }}>
					<TouchableOpacity
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
		</KeyboardAvoidingView>
	);
};

export default Login;

const styles = StyleSheet.create({});
