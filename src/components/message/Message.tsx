import "./message.scss"
import hintImg from '../../assets/messageHint.png';
import { useState } from "react";

type MessageProps = {
    messageOpen : boolean;
    setMessageOpen (value : boolean) : void 

}
export default function Message({messageOpen, setMessageOpen}: MessageProps) {
    // set Name
    const [name, setName] = useState('');
    const [isNameFocus, setIsNameFocus] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    
    const onChangeName= (e:any) =>{
        setName(e.target.value)
    };
    const onNameFocus = (e:any) => {
        setIsNameFocus(true)
    };
    const onNameFocusOut  = (e:any) => {
        setIsNameFocus(false)
        // chec name is empty value
        if (name === '' && isNameFocus){
            setIsNameValid(false);
        }
        //if name is not empty value, input name float is active
        if (name != ''){
            setIsNameFocus(true)
            setIsNameValid(true);
        }
    };

    // set Eamil
    const [mail, setMail] = useState('')
    const [isEmailFocus, setIsEmailFocus] = useState(false);
    const [isMailValid, setIsMailValid] = useState(true);

    const onChangeMail= (e:any) =>{
        setMail(e.target.value)
    };
    
    const onEmailFocus = (e:any) => {
        setIsEmailFocus(true);
    };
    const onEmailFocusOut  = (e:any) => {
        setIsEmailFocus(false);

        // check mail is empty string
        if (mail === ''  && isEmailFocus){
            setIsMailValid(false);
        }
        // check mail is valid type
        if (mail.includes("@") === false){
            setIsMailValid(false);
        }else{
            setIsMailValid(true);
        }
        // if mail is not empty value, input mail float is active
        if (mail != ''){
            setIsEmailFocus(true)
        }
    };
    // set message text
    const[messageTxt, setMessageTxt] = useState('')

    const onStartMessage = ()=>{
        setMessageOpen(!messageOpen);
        
        setName('')
        setMail('')
        setMessageTxt('')

        setIsNameFocus(false)
        setIsEmailFocus(false);
        setIsMailValid(true);
        setIsNameValid(true);
    }
    const onChangeTxt = (e:any)=>{
        setMessageTxt(e.target.value)
    }

    return (
        < >
        <div className={"message " + (messageOpen && "active")} onClick = {onStartMessage}>
            <div className="messageButton"/>
            <i className="fas fa-comment-alt"></i>
            <div className="multi">
                <span className="line1"></span>
                <span className="line2"></span>
            </div>
            
        </div>
        <div className={"messageBox " + (messageOpen && "active")}>
            <div className="messageBoxHeader">
                <h4>SwanmpMnsters</h4>
            </div>
            <div className="messageHint">
                <img src={hintImg} alt="" />
                <label >Hi! Let us know how we can help and we’ll respond shortly.</label>
            </div>
            <div className="messageName">
                <label className={"inputNameFloat "+ (isNameFocus && "active")}>Name*</label>
                <input type="text"  onFocus = {onNameFocus} onBlur ={onNameFocusOut} onChange = {onChangeName} value={name}/>
                
            </div>
            <p className={"nameInVaild "+ (!isNameValid && "isIvalid")} >Please fill in this required field</p>
            
            <div className="messageEmail">
                <input type="text"  onFocus = {onEmailFocus} onBlur ={onEmailFocusOut} onChange = {onChangeMail}  value={mail}/>
                <label className={"inputEmailFloat "+ (isEmailFocus && "active")}>Eamil*</label>
            </div>
            <p className={"mailInVaild "+ (!isMailValid && "isIvalid")} >Please fill in this required field</p>
            
            <textarea className="messageText" onChange = {onChangeTxt} value= {messageTxt}>{messageTxt}</textarea>
            <button className="messageSend">SEND</button>
            <label className="comment">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</label>
        </div>

        </>
    )
}
