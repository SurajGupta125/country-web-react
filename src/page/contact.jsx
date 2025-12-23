import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export const Contact = () => {
    const [data, setData] = useState({
        username: "",
        mail: "",
        message: ""
    })

    const handleInput = (e) => {
        const {name,value} = e.target 
        setData((pre)=>({...pre,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        setData({username:"",mail:"",message:""})
        alert(`Welcom ${data.username } !! Your detils Successfully Send.`)
    }

    return (
        <section>
            <div className="container">
                <div className="contact-1">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" value={data.username} onChange={(e) => handleInput(e)} id="username" autoComplete="false" required placeholder="Enter Your Name" />
                        <input type="text" name="mail" value={data.mail} onChange={(e) => handleInput(e)} id="mail" autoComplete="false" required placeholder="Enter Your Email" />
                        <textarea name="message" value={data.message} onChange={(e) => handleInput(e)} placeholder="message" id="message" cols="20" rows="5"></textarea>
                        <button type="submit" className="formbtn">Send  &nbsp;<FaArrowRightLong /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}