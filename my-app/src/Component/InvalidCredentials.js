import React from "react";
import { useNavigate } from "react-router-dom";


function InvalidCredentials(){
    
    let navigate = useNavigate()
    function RedirectLogin(){
        navigate('/',true)
    }

    return(
        <>
<p className="invalidcredentials">"Page you are looking for does'nt exist."</p>
<p className="credential"> correct mail : "singhaaru411@gmail.com" <br></br>correct password :"password@11"
</p>
<form>
    <button className="invalid" onClick={RedirectLogin}> Again Login </button>
</form>
</>
    )
}

export default InvalidCredentials;