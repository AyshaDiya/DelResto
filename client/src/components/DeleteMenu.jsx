import axios from 'axios'
import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteMenu = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() =>{
        axios.delete('http://localhost:3001/Menu/Menu/'+id)
        .then(res => {
            if(res.data.deleted){
                navigate('/menu')
    
            }
        }).catch(err => console.log(err))
      }, [])
}

export default DeleteMenu