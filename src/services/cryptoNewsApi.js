import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key':'dc02c15c30msh862157bbdbc96c3p1ddee8jsn26e6de474d02',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}


const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url)=>({url, headers: cryptoNewsHeaders}) 

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptoNews : builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery} = cryptoNewsApi;