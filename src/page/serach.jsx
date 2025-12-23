import { IoSearchSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

export const SearchBar = ({ searchCountry, setSearchCountry, searchFilter, setSearchFilter,handleAsc,handleDsc }) => {

   

    return (
        <form>
            <div className="search">
                <IoSearchSharp />
                <input
                    type="text"
                    value={searchCountry}
                    onChange={(e) => setSearchCountry(e.target.value)}
                    placeholder="Search Country"
                    autoComplete="off"
                />
            </div>

            <div className="countrySort" onClick={() => handleAsc()}>Assending</div>
            <div className="countrySort" onClick={() => handleDsc()}>Desending</div>

            <div className="filter">
                <FaFilter />
                <select
                    className="options"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                >
                    <option value="">--select--</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                </select>
            </div>
        </form>
    )
}
