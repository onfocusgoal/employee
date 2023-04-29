import { apiSlice } from "../api/apiSlice";

export const checkOutSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		checkOut: builder.mutation({
			query: (credentials) => ({
				url: "/checkout",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useCheckOutMutation } = checkOutSlice;
