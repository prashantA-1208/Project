import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast"
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const navigate =useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(
                "/api/v1/auth/register", 
                {name,email,password,phone,address} 
            )
            if(res.data.success){                
                toast.success( res.data.message)
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
                
            }
            else{
                toast.error(res.data.message);
                
                
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <Layout> 
            <div className='form-container' >
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputName" 
                        placeholder='Enter Your Name' 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}
                        required
                        />

                    </div>
                    <div className="mb-3">
                        
                        <input type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Enter Your Email' 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        />

                    </div>
                    <div className="mb-3">
                        
                        <input type="password" 
                        className="form-control"
                        id="exampleInputPassword" 
                        placeholder='Enter Your Password' 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)} 
                        required 
                    />
                    </div>
                    
                    <div className="mb-3">
                        
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputNumber" 
                        placeholder='Enter Your Phone Number' 
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)} 
                        required
                        />

                    </div>
                    <div className="mb-3">
                        
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputAddress" 
                        placeholder='Enter Your Address'  
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)} 
                        required
                        />

                    </div>


                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register