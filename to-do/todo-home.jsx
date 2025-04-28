import { Link} from 'react-router-dom'

export function TodoHome(){

    return(
        <div className='d-flex justify-content-center align-items-center'  style={{height:'550px'}}>
           <div style={{width:'500px'}} className='d-flex' >
           <Link to='/register' className="btn btn-dark w-50">Register</Link>
           <Link to='/login' className="btn btn-warning w-50 mx-2">Login</Link>
           </div>
        </div>
    )
}
 //className='d-flex'
 //style={{width:'500px'}} 