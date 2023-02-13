import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom"

const Protected = (props) => {
    const {Component} = props;

    const navigate = useNavigate();

    useEffect(()=>{
      const token = localStorage.getItem('jwtToken');
        if(!token){
            navigate("/sellerLogin");
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
