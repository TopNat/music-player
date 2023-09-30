import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicApi = createApi({
    reducerPath: "musicApi",
        baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/",
    }),
    endpoints: (builder) => ({
        getAllMusic: builder.query({
          query: () => "track/all"
        }),
        getSelectionMusic: builder.query({
          query: ({id}) => `selection/${id}/`
        }),
        likeTrack: builder.mutation({
          query: ({id, access}) => ({                 
              url: `track/${id}/favorite/`,            
              headers: { authorization: `Bearer ${access}` },
              method: 'POST',                     
          })
        }),
        dislikeTrack: builder.mutation({
          query: ({id, access}) => ({                 
              url: `track/${id}/favorite/`,            
              headers: { authorization: `Bearer ${access}` },
              method: 'DELETE',                     
          })
        }),
        getAllFavorite: builder.query({
          query: ({access}) => ({
            url: 'track/favorite/all/',           
            headers: { authorization: `Bearer ${access}` }
          })
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
