import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { arrowDown_128, arrowUp_128 } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useCheckInMutation } from "../redux/auth/checkIn";
import { useCheckOutMutation } from "../redux/auth/checkOut";
import { selectToken, selectUser } from "../redux/auth/authSlice";

const Feed = () => {
	const insets = useSafeAreaInsets();
	const user = useSelector(selectUser);
	const token = useSelector(selectToken);

	// const locations = useSelector(selectLocationDetails);
	const dispatch = useDispatch();

	const [checkIn, { loading }] = useCheckInMutation();
	const [checkOut] = useCheckOutMutation();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			let regionFound = await Location.reverseGeocodeAsync({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			});

			// dispatch(
			// 	setCurrentLocation({
			// 		coords: location?.coords,
			// 		region: regionFound[0],
			// 	}),
			// );
		})();
	}, []);

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
						Feed
					</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: "row",
					gap: 20,
					alignItems: "center",
					padding: 20,
					backgroundColor: "#fff",
				}}>
				<Image
					style={{
						width: 90,
						height: 90,
						borderRadius: 50,
						backgroundColor: "#eee",
					}}
				/>
				<View>
					<Text>{user?.name}</Text>
					<Text>{user?.field}</Text>
				</View>
			</View>

			<View
				style={{
					padding: 20,
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: "#fff",
				}}>
				<View
					style={{
						flexDirection: "row",
						gap: 10,
					}}>
					<Image
						source={arrowDown_128}
						style={{ width: 70, height: 70 }}
					/>
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={{ fontSize: 18, fontWeight: 600 }}>
							{user?.checkIn}
						</Text>
						<Text style={{ fontSize: 13, fontWeight: 700 }}>
							Checked In
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: "row", gap: 10 }}>
					<Image source={arrowUp_128} style={{ width: 70, height: 70 }} />
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={{ fontSize: 18, fontWeight: 600 }}>
							{user?.checkOut}
						</Text>
						<Text style={{ fontSize: 13, fontWeight: 700 }}>
							Checked Out
						</Text>
					</View>
				</View>
			</View>

			<View style={{ paddingVertical: 40, paddingHorizontal: 20, gap: 40 }}>
				<TouchableOpacity
					style={{
						backgroundColor: "dodgerblue",
						padding: 20,
						borderRadius: 35,
						elevation: 3,
						marginHorizontal: 20,
					}}>
					<Text
						style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
						Check In
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						backgroundColor: "dodgerblue",
						padding: 20,
						borderRadius: 35,
						elevation: 3,
						marginHorizontal: 20,
					}}>
					<Text
						style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
						Check Out
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Feed;

const styles = StyleSheet.create({});
