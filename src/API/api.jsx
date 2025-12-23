import axios from "axios"
const api  = axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

// get data 
export const getData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}

// get data 
export const getMoreData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`)
}