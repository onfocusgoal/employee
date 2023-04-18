import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { arrowRight_64 } from "../../../assets/icons";

const Account = () => {
	const insets = useSafeAreaInsets();
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
						Account
					</Text>
				</View>
			</View>
			{/* account image and text  */}
			<View
				style={{
					flexDirection: "row",
					gap: 20,
					alignItems: "center",
					paddingHorizontal: 20,
					paddingVertical: 15,
					backgroundColor: "#fff",
				}}>
				{/* image */}
				<View>
					{/* <Image /> */}
					<View
						style={{
							width: 68,
							height: 68,
							borderRadius: 35,
							backgroundColor: "#dddddd",
						}}
					/>
				</View>
				{/* text */}
				<View>
					<Text style={{ fontSize: 18, fontWeight: 500 }}>
						Michael Angelo
					</Text>
					<Text style={{ fontSize: 14 }}>UI Designer</Text>
				</View>
			</View>

			<View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
				{/* username  */}
				<TouchableOpacity
					style={{
						flexDirection: "row",
						backgroundColor: "#fff",
						justifyContent: "space-between",
						paddingVertical: 15,
						paddingHorizontal: 10,
						borderBottomColor: "#ddd",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontSize: 15, letterSpacing: 0.2, fontWeight: 500 }}>
						Username
					</Text>
					<Image
						source={arrowRight_64}
						style={{ width: 24, height: 24, tintColor: "#dddddd" }}
					/>
				</TouchableOpacity>
				{/* full name  */}
				<TouchableOpacity
					style={{
						flexDirection: "row",
						backgroundColor: "#fff",
						justifyContent: "space-between",
						paddingVertical: 15,
						paddingHorizontal: 10,
						borderBottomColor: "#ddd",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontSize: 15, letterSpacing: 0.2, fontWeight: 500 }}>
						Full Name
					</Text>
					<Image
						source={arrowRight_64}
						style={{ width: 24, height: 24, tintColor: "#dddddd" }}
					/>
				</TouchableOpacity>

				{/* email */}
				<TouchableOpacity
					style={{
						flexDirection: "row",
						backgroundColor: "#fff",
						justifyContent: "space-between",
						paddingVertical: 15,
						paddingHorizontal: 10,
						borderBottomColor: "#ddd",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontSize: 15, letterSpacing: 0.2, fontWeight: 500 }}>
						Email
					</Text>
					<Image
						source={arrowRight_64}
						style={{ width: 24, height: 24, tintColor: "#dddddd" }}
					/>
				</TouchableOpacity>

				{/* change password  */}
				<TouchableOpacity
					style={{
						flexDirection: "row",
						backgroundColor: "#fff",
						justifyContent: "space-between",
						paddingVertical: 15,
						paddingHorizontal: 10,
						borderBottomColor: "#ddd",
						borderBottomWidth: 1,
					}}>
					<Text
						style={{ fontSize: 15, letterSpacing: 0.2, fontWeight: 500 }}>
						Change Password
					</Text>
					<Image
						source={arrowRight_64}
						style={{ width: 24, height: 24, tintColor: "#dddddd" }}
					/>
				</TouchableOpacity>
			</View>
			{/* button sign out  */}
			<View
				style={{
					bottom: 0,
					backgroundColor: "#fff",
					padding: 20,
					position: "absolute",
					bottom: 20,
					right: 0,
					left: 0,
				}}>
				<TouchableOpacity
					style={{
						padding: 15,
						marginHorizontal: 25,
						justifyContent: "center",
						backgroundColor: "dodgerblue",
						borderRadius: 5,
					}}>
					<Text
						style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>
						Sign out
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Account;

const styles = StyleSheet.create({});
