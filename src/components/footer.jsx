/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react"
import footerApi from "../API/footerApi.json"
import { IoMailOpenSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Footerbottem } from "./subfooter";

export const Footer = () => {
    const [footerData, setFooterData] = useState([])

    const footerIcon = {
        FaLocationDot: <FaLocationDot />,
        MdAddIcCall: <MdAddIcCall />,
        IoMailOpenSharp: <IoMailOpenSharp />
    }

    useEffect(() => {
        setFooterData(footerApi)
    }, [])

    return (
        <>
            <footer>
                <div className="containe">
                    <div className="touch-info">
                        {
                            footerData.map((curElem) => {
                                const { id, title, detail, icon } = curElem
                                return (
                                    <div key={id}>
                                        <div className="icon">{footerIcon[icon]}
                                            <div className="info">
                                                <div className="title">{title}</div>
                                                <div className="detail">{detail}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </footer>
            <Footerbottem />
        </>
    )
}