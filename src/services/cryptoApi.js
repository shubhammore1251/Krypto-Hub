import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const cryptoHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key":"dc02c15c30msh862157bbdbc96c3p1ddee8jsn26e6de474d02",
  // 'x-access-token': "coinranking1d0ed3260e7f98a3f113729c925c1c5fddf78f044a704269"
};


// const baseUrl = 'https://api.coinranking.com/v2';
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),

  })
});

export const { useGetCryptoQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
