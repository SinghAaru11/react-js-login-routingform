import React from "react";

import {useNavigate} from "react-router-dom";



function Signup (){
    
let navigate = useNavigate()

function Logout(){
    navigate('/',true)
}

    return(
        <>
<div className="sign-up-page">"Login Sucessful and Welcome to our Portal."</div>

<form>
<button className="sign-up" onClick={Logout}>Logout</button>

</form>
</>
    )
}

export default Signup;