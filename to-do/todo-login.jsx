import axios from 'axios'
import { useFormik } from 'formik';
import { useCookies } from 'react-cookie'

import { Link, useNavigate} from 'react-router-dom'

export function ToDOLogin(){


      const [cookie , setCookie , removeCookie] = useCookies(['userid']);

    let naviget =  useNavigate()

   //   to collect data from use formik\
   const  formik = useFormik({

    initialValues:{
        userid:'',
        password:''
       
    },
     onSubmit : (user)=>{
        axios.get('http://127.0.0.1:3000/users')
               .then((response)=>{
                   let userdetails = response.data.find((item)=>item.userid===user.userid) ;
                     if(userdetails){
                       if(user.password===userdetails.password){
                           setCookie('userid', userdetails.userid)
                           naviget('/dashboard');
                       }else{
                           alert('invalid password')
                       }
                     }else{
                       alert("User doesn't Exist")
                     }
               })
        }
})





    return(
        <div className="container w-50 p-4 border border-2 border-gray rounded rounded-1  bg-light ">
          <h3> User login</h3>
          <form onSubmit={formik.handleSubmit}>
               <dl>
                <dt>User id</dt>
                <dd><input onChange={formik.handleChange} className="form-control" type="text" name="userid" /></dd>
                <dt>Password</dt>
                <dd><input  onChange={formik.handleChange} className="form-control" type="text" name="password" /></dd>
                 </dl>
              <button className="btn btn-warning">Login</button>
                < p className="mt-4">
                    New User <Link to='/register'>register</Link>
                </p>
              </form>
        </div>
    )
}



// const formik = useFormik({
//     intialValues :{
//        userid:'',
//        password:''
//     },
//     onSubmit : (user)=>{
//        console.log(user);
    //        axios.get('http://127.0.0.1:4000/users')
    //        .then((response)=>{
    //            let userdetails = response.data.find((item)=>item.userid===user.userid) ;
    //              if(userdetails){
    //                if(user.password===userdetails.password){
    //                    setCookie('userid', userdetails.userid)
    //                    naviget('/dashboard');
    //                }else{
    //                    alert('invalid password')
    //                }
    //              }else{
    //                alert("User doesn't Exist")
    //              }
    //        })
//     }
// })