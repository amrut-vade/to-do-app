import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useFormik } from "formik";




export function EditAppointment(){

     let navigate = useNavigate()
  
      // to collect route parameter
      let params  = useParams();
  
      const [app,setapp] =  useState({id:0, title:'', date:'', userid:''})
      
      const formik = useFormik({
          
          initialValues :{
            id:app.id,
            title:app.title,
            date:app.date,
            userid:app.userid,
          },
          onSubmit :(data)=>{
             
            axios.put(`http://127.0.0.1:3000/appointements/${params.id}`,data)
            .then(()=>{
                console.log('saved')
            })

            navigate('/dashboard');
          },
          
          enableReinitialize:true


      })




      useEffect(()=>{
        axios.get(`http://127.0.0.1:3000/appointements/${params.id}`)
        .then(response=>{
           //  console.log(response.data);
           setapp(response.data)
              console.log(app);
             
             
        })
       },[])





    return(
        <div className="container w-50 p-4 mt-4 bg-light">
             <h3>Edit Appointment</h3>
             <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Title</dt>
                    <dd>
                        <input type="text" onChange={formik.handleChange} values={formik.values.title} className="form-control" name="title"></input>
                    </dd>
                    <dt>Date</dt>
                    <dd>
                        <input type="date" onChange={formik.handleChange} values={formik.values.title} className="form-control" name="date"></input>
                    </dd>
                </dl>
                <button className="btn btn-success mx-2">Save</button>
                <Link  to='/dashboard' className="btn btn-warning">Cancel</Link>
             </form>

        </div>
    )
}