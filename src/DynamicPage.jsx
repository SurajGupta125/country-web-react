/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useTransition, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMoreData } from "./API/api"
import { Loder } from "./page/Loder"
import { NavLink } from "react-router-dom"

export const DynamicPage = () => {
    const params = useParams()

    const [mdata, setMdata] = useState([])
    const [isPending, startTransition] = useTransition()


    useEffect(() => {
        startTransition(async () => {
            const res = await getMoreData(params.id)
            setMdata(res.data)
        })
    }, [])

    if (isPending) return <Loder />

    console.log(mdata)



    return (
        <div className="dynamicCard">
            <div className="container">
                <ul className="indData">
                    {
                        mdata.map((country, index) => {
                            const { flags, name, population, region, subregion, capital, tld, languages, currencies, borders } = country

                            return (
                                <li key={index} className="indInfo">
                                    <div className="indflag">
                                        <img src={flags.png} alt={flags.alt} />
                                    </div>
                                    <div className="indData">
                                        <h2>{name.common}</h2>
                                        <p><b>Native Name:</b> {country.name.nativeName && Object.keys(country.name.nativeName).length > 0 ? `${(Object.keys(country.name.nativeName).map((data) => country.name.nativeName[data].common).join(", "))} ` : `Not Available`}
                                        </p>

                                        <p><b>population</b>: {((population).toLocaleString())}</p>

                                        <p><b>Region:</b> {region}</p>

                                        <p><b>Sub Region:</b> {subregion}</p>

                                        <p><b>Capital:</b> {((capital).join(", "))}</p>

                                        <p><b>Top Level Domain:</b> {((tld).join(", "))}</p>

                                        <p><b>Language:</b> {(Object.keys(languages).map((lang) => country.languages[lang]).join(", "))}</p>

                                        <p><b>Curriences:</b> {(Object.keys(currencies).map((cur) => country.currencies[cur].name).join(", "))}</p>

                                        <p><b>Curriences symbol:</b> {(Object.keys(currencies).map((cur) => country.currencies[cur].symbol).join(", "))}</p>

                                        <p><b>Border:</b> {((borders).join(", "))}</p>

                                    </div>
                                </li>
                            )
                        })
                    }
                    <div className="Backbtn">
                        <NavLink to="/country">Back</NavLink>
                    </div>
                </ul>
            </div>
        </div>
    )
}