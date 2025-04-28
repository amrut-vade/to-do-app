import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import './todo-index.css';
import { TodoHome } from './todo-home';
import { ToDOLogin } from './todo-login';
import { ToDORegister } from './todo-Register';
import { UserDashBoard } from './user-dashboard';
import {AddAppointment} from    './add-appointment'
import{ DeleteAppointment} from './delete-appointment'
import {EditAppointment } from './edit-appointment'

export function ToDoIndex(){

    return(
        <div className="bg-image">
            <BrowserRouter>
            <header className='text-center text-dark p-2 '>
                <h1 ><Link to="/" className='btn btn-light w-50'>TO-DO-APP</Link></h1>
            </header>
             <section>
                 <Routes>
                     <Route path='/' element={<TodoHome/>}></Route>
                     <Route path='register'  element={<ToDORegister/>}></Route>
                     <Route path='login'  element={<ToDOLogin/>}></Route>
                     <Route path='dashboard'  element={<UserDashBoard/>}></Route>
                     <Route path='Add-appointment' element={<AddAppointment/>}></Route>
                     <Route path='delete-appointment/:id' element={<DeleteAppointment/>}></Route>
                     <Route path='edit-appointment/:id' element={<EditAppointment/>}></Route>
                 </Routes>
             </section>
            </BrowserRouter>
        </div>
    )
}