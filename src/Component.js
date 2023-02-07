import React from "react";
import { useLocation } from "react-router-dom";
const Component = (props) => {
  const { state } = useLocation();
  const { name, email, age, gender } = state.formdata;
  return (
    <div>
     <h1>name : {name}</h1> 
     <h1>email : {email}</h1>
      <h1>age : {age}</h1>
       <h1>gender : {gender}</h1>
    </div>
  );
};
export default Component;
