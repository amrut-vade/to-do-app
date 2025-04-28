import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate,Link } from "react-router-dom";
import { date } from "yup";


export function AddAppointment(){
        const [cookie , setCookie , removeCookie] = useCookies(['userid']);

         let navigate = useNavigate()
       
        const formik = useFormik({
            initialValues :{
                title:'',
                date:'',
                userid:cookie['userid']

            },
          onSubmit :(appointement)=>{
            console.log(appointement);
            axios.post(`http://127.0.0.1:3000/appointements`,appointement)
            .then(()=>{
                console.log('appontment added');
            })
            navigate('/dashboard');
          }


        })

    return(
        <div className="container w-50 p-4 mt-4 bg-light">
            <h3>Add New Appointment  - {cookie.userid}</h3>
            <form onSubmit={formik.handleSubmit}
            >
                <dl>
                    <dt>Title</dt>
                    <dd>
                     <input onChange={formik.handleChange} type="text"    className="form-control" name="title">
                    </input>
                    </dd>
                    <dt>Date</dt>
                    <dd>
                     <input  onChange={formik.handleChange}   type="date" className="form-control" name="date">
                    </input>
                    </dd>
                </dl>
                <button type="submit" className="btn btn-success">Add</button>
                <Link to="/dashboard" className="btn btn-warning mx-2">Cancel</Link>
            </form>
        </div>
    )
}





// const formik = useFormik({
//     intialValues :{
//        title:'',
//        date:'',
//        userid:cookie["userid"]
//     } ,
//     onSubmit : (appointment)=>{
//        axios.post(`http://127.0.0.1:3000/appointements`,appointment)
//        .then(()=>{
//            console.log('Appointement Addedd')
//        })
//        navigate('/dashboard');
//     }
// })