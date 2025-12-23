import { FaArrowRightLong } from "react-icons/fa6";
import {NavLink} from "react-router-dom"
import { About } from "./about";
export const Home = () => {
    return (
        <header>
            <div className="container">
                <div className="home-1">
                    <div className="home-flex">
                        <div className="home-flex-1" >
                            <p>Explore the World, One Country at a Time.</p>
                            <p>Discover the history, culture, and beauty of nation. Sort, search, and filter through countries to find the details you need.</p>
                            <NavLink to="country">Start Exploring &nbsp;<FaArrowRightLong /></NavLink>
                        </div>
                        <div className="home-flex-2">
                            <div className="home-flex-2-img">
                            <img src="world.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <About/>
            </div>
        </header>
    )
}