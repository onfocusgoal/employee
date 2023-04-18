import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";

const SignUp = () => {
	const [signUpDetails, setSignUpDetails] = useState({
		name: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
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
					value={signUpDetails?.username}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({ ...value, username: e }))
					}
					placeholder="username"
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
					value={signUpDetails?.password}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({ ...value, password: e }))
					}
					placeholder="Password"
				/>
				<TextInput
					placeholderTextColor="#bbb"
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						backgroundColor: "#fff",
						borderRadius: 10,
					}}
					value={signUpDetails?.confirmPassword}
					onChangeText={(e) =>
						setSignUpDetails((value) => ({
							...value,
							confirmPassword: e,
						}))
					}
					placeholder="Confirm Password"
				/>
			</View>

			<View style={{ gap: 20 }}>
				<TouchableOpacity
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

				<Text style={{ textAlign: "center" }}>
					Already have an account?{" "}
					<Text style={{ fontWeight: 500 }}>Sign In</Text>
				</Text>
			</View>
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
