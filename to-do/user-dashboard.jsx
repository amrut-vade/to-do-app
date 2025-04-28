import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'
import moment from "moment";

export function UserDashBoard(){

      let navigate = useNavigate();

     const [cookie , setCookie , removeCookie] = useCookies(['userid']);
     const [appointements, SetAppointements] =  useState([{id:0, title:'', date:'', userid:''}])


       useEffect(()=>{
        axios.get('http://127.0.0.1:3000/appointements')
        .then(response=>{
          let user_appointement = response.data.filter(appointements =>appointements.userid === cookie['userid'])
          SetAppointements(user_appointement);
        })
         
       },[])


       function handleSingout(){
        removeCookie('userid')
        navigate('/login')
          
       }
     return(
        <div className="container w-50 p-4 mt-4 bg-light">
            <h3 className="d-flex  justify-content-between "><span>{cookie['userid']}</span> <span>Dashboard</span> <span onClick={handleSingout} className="btn btn-link">Sing out</span></h3>
              <Link to={"/Add-appointment"} className="btn btn-success bi bi-calender-event">Add Appointment</Link>
              <div className="mt-2 overflow-auto " style={{height:'400px'}}>
                {
                  appointements.map(appointement=>
                    <div key={appointement.id} className="alert alert-success m-2">
                         <h4>{appointement.title}</h4>
                         <p>{appointement.date}</p>
                         <div>
                            <Link to={`/edit-appointment/${appointement.id}`} className="bi bi-pen-fill btn btn-warning"></Link>
                            <Link to={`/delete-appointment/${appointement.id}`} className="bi bi-trash-fill btn btn-danger mx-2"></Link>
                          </div>
                   </div>
                  

                  )
                }

              </div>
        </div>
     )
}