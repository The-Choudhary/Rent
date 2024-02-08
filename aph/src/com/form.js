import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form(){

    const [ Form , setFormData ] = useState({})
const navigate = useNavigate() ; 
const form=(e)=>{

const idd='aman';
const passs='12';

if ( 
 idd==Form.id && passs==Form.pass
){
navigate('admin');
    
}

else{
    alert('no gateway');
}
};



const All=(e)=>{

    setFormData(Form=> ({...Form,[e.target.name]: e.target.value }))


console.log('Form',Form); 



};




return(

    <div className="login-bg-color">
<div className="form">
<form className="login" onSubmit={form}>
<h1 className="h1x">Sign In</h1>
<input type="text" placeholder="Name"  onChange={All} className="login1" name="id" /><br/>

<input type="password" placeholder="Password"  onChange={All} className="login1" name="pass" /><br/>

<button className="login2">Submit</button>
</form>

</div>
</div>
)



}