import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export function  DeleteAppointment(){
      

    let navigate = useNavigate()

    // to collect route parameter
    let params  = useParams();

    const [appointement,SetAppointements] =  useState({id:0, title:'', date:'', userid:''})

    useEffect(()=>{
           axios.get(`http://127.0.0.1:3000/appointements/${params.id}`)
           .then(Response=>{
            SetAppointements(Response.data)
           })
    },[])


    function handleDeleteClick(){
        axios.delete(`http://127.0.0.1:3000/appointements/${params.id}`)
        .then(()=>{
            console.log('deleted..')
        })
        navigate('/dashboard');

    }

    return(
        <div  className="container w-50 p-4 mt-4 bg-light">
             <h3>Delete Appointment</h3>
            <h5 className="my-3">Are you share  want to delete? <br/> <span className="text-danger my-3">{appointement.title}</span></h5>
            <button onClick={handleDeleteClick} className="btn btn-danger mx-2">Yes</button>
           <Link  to="/dashboard" className="btn btn-warning">Cancel</Link>
        </div>
    )
}