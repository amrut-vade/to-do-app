
import axios from 'axios'
import { useFormik } from 'formik'

import { Link, useNavigate} from 'react-router-dom'

export function ToDORegister(){

    let navigate = useNavigate();


    //   to collect data from use formik\
        const  formik = useFormik({

            initialValues:{
                userid:'',
                password:'',
                email:''
            },
             onSubmit : (user)=>{
                console.log(user);
                axios.post(`http://127.0.0.1:3000/users`, user)
                .then((response)=>{

                    console.log('Posted..',response )
                })
                alert('Registered Succefully')
                navigate('/login')
             }
        })

      return(
          <div className="container w-50 p-4 border border-2 border-gray rounded rounded-1  bg-light ">
            <h3>Register User</h3>
              <form onSubmit={formik.handleSubmit}>
               <dl>
                <dt>User id</dt>
                <dd><input onChange={formik.handleChange}  className="form-control" type="text" name="userid" /></dd>
                <dt>Password</dt>
                <dd><input onChange={formik.handleChange} className="form-control" type="text" name="password" /></dd>
                <dt>Email</dt>
                <dd><input onChange={formik.handleChange} className="form-control" type="text" name="email" /></dd>
             
              </dl>
              <button className="btn btn-warning">Register</button>
                < p className="mt-4">
                    Exiting User <Link to='/login'>login</Link>
                </p>
              </form>
          </div>
      )
}