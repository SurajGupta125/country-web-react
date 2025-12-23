import {NavLink} from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

export const Card = ({ curElem }) => {
    const { flags, capital, name, population, region } = curElem

    // console.log(curElem)
    return (
        <li>
            <div className="flag">
                <img src={flags.png} alt="" />
            </div>
            <h2>{name.common}</h2>
            <p><b>Capital:</b> {capital.join(", ")}</p>
            <p><b>Population:</b> {population.toLocaleString()}</p>
            <p><b>Region:</b> {region}</p>
            <NavLink to={`/country/${name.common}`} className="dynamic-btn"><button className="formbtn">Read More &nbsp;<FaArrowRightLong /></button></NavLink>
        </li>
    )
}