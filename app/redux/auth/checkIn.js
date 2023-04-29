import { apiSlice } from "../api/apiSlice";

export const checkInSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		checkIn: builder.mutation({
			query: (credentials) => ({
				url: "/checkin",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useCheckInMutation } = checkInSlice;
