import React, { useState } from "react";

const FormValidation = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) =>{
    e.preventDefault()
    if(userName.length > 4){
        setErrorUserName('')
        setUserColor('green')
    }else{
        setErrorUserName('Name Sould be at leat 4 character')
        setUserColor("red")
    }

    if(email.includes('@')){
        setErrorEmail("")
        setEmailColor('green')
    }else{
        setErrorEmail("Must be include @ ")
        setEmailColor("red")
    }

    if(password.length > 8){
        setErrorPassword("")
        setPasswordColor('green')
    }else{
        setErrorPassword("Password at least 8 character")
        setPasswordColor("red")
    }

    if(password !== '' && password === confirmPassword){
        setErrorConfirmPassword('')
        setConfirmPasswordColor('green')
    }else{
        setErrorConfirmPassword("Password did't match")
        setConfirmPasswordColor("red")
    }
  }
  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ borderColor: userColor }}
        />
        <p className="error">{errorUserName}</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: emailColor }}
        />
        <p className="error">{errorEmail}</p>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{borderColor: passwordColor}}
        />
        <p className="error">{errorPassword}</p>

        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}} />
        <p className="error">{errorConfirmPassword}</p>

        <button className="submit-btn" onClick={validate}>Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
