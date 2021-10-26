import "./signup.scss"
import { useState } from "react";
export default function Signup() {
    const [isFocus, setIsFocus] = useState(false)
    const onFocus = () => {
        setIsFocus(true)
    };
    const onFocusOut  = () => {
        setIsFocus(false)
    };
    return (
        <div className = "signup">
            <div className="formBlock">
            <form className="signupForm" >
                <div className="signUpInput">
                    <input type="text" onFocus = {onFocus} onBlur ={onFocusOut}/>
                    <label className={"inputFloat "+ (isFocus && "active")} >email</label>
                </div>
                <button className="signupButton">SIGN UP</button>
            </form>
            </div>
            
        </div>
    )
}
