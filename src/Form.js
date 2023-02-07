import React , { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Form = () => {
const navigate = useNavigate();
const [formdata,setFormData] = useState({
        name:"",
        email:"",
        age:"",
        gender:""
});
const inputHandeler =(event)=>{
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData((prev) =>{
        return {...prev,[fieldName]:fieldValue};
    });
};
const submitHandler =(event)=>{
    event.preventDefault();
    navigate("/userdata",{
        state:{
            formdata,
        },
    });
};
    
  return (
    <>
    <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" value={formdata.name} onChange={inputHandeler} /><br />
        <label htmlFor='name'>Email:</label>
        <input type="text" name="email" value={formdata.email} onChange={inputHandeler} /><br />
        <label htmlFor='name'>Age:</label>
        <input type="text" name="age" value={formdata.age} onChange={inputHandeler} /><br />
        <label htmlFor='name'>Gender:</label>
        <input type="text" name="gender" value={formdata.gender} onChange={inputHandeler} /><br />
        <button type="submit">Submit</button>
    </form>
    </>
  )
};

export default Form;