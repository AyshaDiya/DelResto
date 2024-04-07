import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import {useState,useEffect} from "react"
import Logout from './components/Logout'
import axios from 'axios'
import AddMenu from './components/AddMenu'
import EditMenu from './components/EditMenu'
import DeleteMenu from './components/DeleteMenu'
import FeedBack from './components/FeedBack'



export function App() {
  const [role,setRole] = useState('')

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
    .then(res => {
      if(res.data.login){
          setRole(res.data.role)
      } else {
        setRole('')
      }
      console.log(res)
    }).catch(err => console.log(err))
  },[])




  return (
    
    <BrowserRouter>
      <Navbar  role={role}/>
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu  role={role}/>}></Route>
        <Route path="/login" element={<Login setRoleVar = {setRole} />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/adduser" element={<AddUser/>}></Route>
        <Route path="/logout" element={<Logout setRole={setRole}/>}></Route>
        <Route path="/addmenu" element={<AddMenu/>}></Route>
        <Route path="/Menu/:id" element={<EditMenu/>}></Route>
        <Route path="/delete/:id" element={<DeleteMenu/>}></Route>
        <Route path="/feed" element={<FeedBack/>}></Route>





      </Routes>
    </BrowserRouter>

  );
}
 export default App;