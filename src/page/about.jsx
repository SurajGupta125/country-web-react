/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import AboutApi from "../API/AboutApi.json"
export const About = () => {
    const [fact, setFact] = useState([])

    useEffect(() => {
        setFact(AboutApi)
    }, [])
    return (
        <main>
            <div className="container">
                <div>
                    <h2 className="country-fact">Here are the Interesting Facts we're proud of</h2>
                    </div>
                <ul>
                    {
                        fact.map((curElem) => {
                            const { country, capital, population, interestingFact } = curElem
                            return (
                                <li key={country}>
                                    <h2>{country}</h2>
                                    <p><span>capital</span> {capital}</p>
                                    <p><span>population</span> {population}</p>
                                    <p><span>interestingFact</span> {interestingFact}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )
}