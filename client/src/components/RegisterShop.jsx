import { useState } from "react";
import './registershop.css'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const RegisterShop = ()=>{

    const [storeName, setStoreName] = useState("");
    const [place, setPlace] = useState("");
    const [secureCode, setSecureCode] = useState("")
    const [registeredShop, setRegisteredShop] = useState("");
    const nevigate = useNavigate()


    const handleFormSubmission = (e) =>{
        e.preventDefault()
        // const {storeName, place, email} 
        Axios.post('http://localhost:5000/api/register', {
            storeName, city : place, secureCode
        }).then(response=>{
            // console.log(response.data._id);
            // setRegisteredShop()
            localStorage.setItem("id", JSON.stringify(response.data._id));
            nevigate('/')
        })
    }

    return (

        <div className="app">
          <h2>Register Your Shop : </h2>
          {/* <div className='container'> */}
            <div className="user_details">
            <label>shop name :</label>
            <input
              className="input_label" 
              type = "text" 
              value={storeName} 
              onChange={(e)=>setStoreName(e.target.value)}  
              placeholder="Enter shop name" 
            />
            </div>

            <div className="user_details">
            <label>secureCode :</label>
            <input
              className="input_label" 
              type = "email" 
              value={secureCode} 
              onChange={(e)=>setSecureCode(e.target.value)} 
              placeholder="Enter securecode" 
            />
            </div>

            <div className="user_details">
            <label>place :</label>
            <input
              className="input_label" 
              type = "text" 
              value={place} 
              onChange={(e)=>setPlace(e.target.value)} 
              placeholder="Enter place" 
            />
            </div>
    
            
            
            <button className='button' onClick={handleFormSubmission}> Submit</button>
          </div>     
      );
}

export default RegisterShop;