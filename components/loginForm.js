import apiHelper from "../helper/apiHelper";
import { useState } from "react";

const Loginform = () => {

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const submitLogin = (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("email", enteredEmail);
        formData.append("password", enteredPassword);
    
        apiHelper("checkLogin", "POST", formData, null)
        .then((res) => {
            const response = res.data;
            console.log(response)
        })
        .catch((error) => console.error(`Error: ${error}`));
    };

    return (
        <div>
            <form method="post" onSubmit={submitLogin}>
                <div><input type="email" name="email" placeholder="email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)}></input></div>
                <div><input type="password" name="password" placeholder="password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}></input></div>
                <div><button type="submit">Submit</button></div>
            </form>
        </div>
    );
}

export default Loginform;