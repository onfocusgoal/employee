import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logOut, setCredentials } from "../redux/auth/authSlice.js";

const IsAuth = ({ children }) => {
	const dispatch = useDispatch();
	let token = useRef(null);

	const getTokenAsyncStorage = async () => {
		let accessToken = await AsyncStorage.getItem("token");
		token.current = accessToken;
	};

	const refreshToken = async () => {
		if (token.current) {
			try {
				const auth = {
					headers: { Authorization: `Bearer ${token.current}` },
				};

				const res = await axios.get(
					`http://10.0.2.2:3000/api/refresh`,
					auth,
				);
				if (!res) {
					await AsyncStorage.removeItem("token");
					token.current = null;
					dispatch(logOut());
					return;
				}
				await AsyncStorage.setItem("token", res.data.accessToken);
				dispatch(setCredentials({ ...res.data }));
				// setToken(res.data.accessToken);
			} catch (error) {
				console.log("refresh token", error.error);
				await AsyncStorage.removeItem("token");
				token.current = null;
				dispatch(logOut());
			}
		}
	};
	useEffect(() => {
		getTokenAsyncStorage().then(() => refreshToken());
	}, [token]);

	useEffect(() => {
		if (token.current) {
			setInterval(() => {
				refreshToken();
			}, 10 * 60 * 100);
		}
	}, [token.current]);

	return <>{children}</>;
};

export default IsAuth;
