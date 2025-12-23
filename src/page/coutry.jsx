import { useEffect, useState, useTransition } from "react"
import { getData } from "../API/api"
import { Card } from "./Card"
import { Loder } from "./Loder"
import { SearchBar } from "./serach"

export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState([])

    const [searchCountry, setSearchCountry] = useState("")
    const [searchFilter, setSearchFilter] = useState("")
    const [asc, setAsc] = useState("")
    // const [dsc, setDsc] = useState("")


    useEffect(() => {
        startTransition(async () => {
            const res = await getData()
            setData(res.data)
        })
    }, [])

    if (isPending) return <Loder />

    const filteredData = data.filter((curCountry) => {
        const nameMatch = curCountry.name.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase())

        let regionMatch = true;

        if (searchFilter && searchFilter !== "select") {
            regionMatch = curCountry.region === searchFilter;
        }

        return nameMatch && regionMatch;
    })

    const handleAsc = () => setAsc("sortAss")
    const handleDsc = () => setAsc("sortDsc")

    if (asc === "sortAss") {
        filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    if (asc === "sortDsc") {
        filteredData.sort((a,b) => b.name.common.localeCompare(a.name.common));
    }

    return (
        <ul className="card-container">
            <div className="container">
                <SearchBar
                    searchCountry={searchCountry}
                    setSearchCountry={setSearchCountry}
                    searchFilter={searchFilter}
                    setSearchFilter={setSearchFilter}
                    handleAsc={handleAsc}
                    handleDsc={handleDsc}
                />


                <div className="country-card">
                    {filteredData.map((curElem, index) => (
                        <Card curElem={curElem} key={index} />
                    ))}
                </div>
            </div>
        </ul>
    )
}
