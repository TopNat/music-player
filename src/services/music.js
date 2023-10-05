import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const TRECKS_TAGS = 'Tracks';

export const musicApi = createApi({
    reducerPath: "musicApi",
        baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/",
    }),
    endpoints: (builder) => ({
        getAllMusic: builder.query({
          query: () => "track/all",
          providesTags: () => [TRECKS_TAGS]
        }),
        getSelectionMusic: builder.query({
          query: ({id}) => `selection/${id}/`,
          providesTags: () => [TRECKS_TAGS]
        }),
        likeTrack: builder.mutation({
          query: ({id, access}) => ({                 
              url: `track/${id}/favorite/`,            
              headers: { authorization: `Bearer ${access}` },
              method: 'POST',                     
          }),
          invalidatesTags: [TRECKS_TAGS]
        }),
        dislikeTrack: builder.mutation({
          query: ({id, access}) => ({                 
              url: `track/${id}/favorite/`,            
              headers: { authorization: `Bearer ${access}` },
              method: 'DELETE',                     
          }),
          invalidatesTags: [TRECKS_TAGS]
        }),
        getAllFavorite: builder.query({
          query: ({access}) => ({
            url: 'track/favorite/all/',           
            headers: { authorization: `Bearer ${access}` }
          }),
          providesTags: () => [TRECKS_TAGS]
        }),
    }),    
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/user/'
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: 'signup/',
        method: 'POST',
        body,
      })
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body,
      }),
     // transformResponse: (response) => response.data,
    }),
    getToken: builder.mutation({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body,
      })
    }),
    refreshToken: builder.mutation({
      query: (body) => ({
        url: 'token/refresh/',
        method: 'POST',
        body: {
          refresh: body,
        },
      })
    })
    
  })
})

export const { useGetAllMusicQuery, useGetSelectionMusicQuery, useLikeTrackMutation, useGetAllFavoriteQuery, useDislikeTrackMutation } = musicApi;

export const { useSignupMutation, useLoginMutation, useGetTokenMutation, useRefreshTokenMutation } = userApi;
