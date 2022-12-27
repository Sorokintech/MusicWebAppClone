import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicAppApi = createApi({
    reducerPath: "musicAppApi",
    // tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online",  
    }), 
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/signup/',
                method: 'POST',
                body: payload
              })
        }),
        login: builder.query({
            query: ({ ...payload }) => ({
                url: '/user/login/',
                method: 'POST',
                body: payload
              })
        }),
        getToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/',
                method: 'POST',
                body: payload
              })
        }),
        refreshToken: builder.query({
            query: ({ ...payload }) => ({
                url: '/user/token/refresh/',
                method: 'POST',
                body: payload
              })
        }),
        getAllTracks:builder.query({
                query: () => ({
                  url: '/catalog/track/all'
                }),
        }),
        getPlaylists:builder.query({
            query: () => "/catalog/selection/",
        }),
        getFavoriteTracks:builder.query({
            query: () => "/catalog/track/favorite/all",
        }),
        // addFavoriteTracks:builder.query({
        //     query: () => `/catalog/track/${payload}/favorite/`,
        //     method: 'POST'
        // }),
        // deleteFavoriteTracks:builder.query({
        //     query: () => `/catalog/track/${payload}/favorite/`,
        //     method: 'DELETE'
        // }),
        getPlaylistById:builder.query({
            query: (id) => ({
                url: `/catalog/selection/${id}/`,
            }),
        }),
        // getTrackById:builder.query({
        //     query: () => `/catalog/track/${id}`,
        // }),
    }),
});

export const  { useSignUpMutation, useGetTokenMutation, useGetAllTracksQuery, useGetPlaylistByIdQuery }  = musicAppApi;