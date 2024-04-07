import React,{ useState,useEffect} from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'




const EditMenu = () => {
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() =>{
        axios.get('http://localhost:3001/Menu/Menu/'+id)
    .then(res => {
        setName(res.data.name)
        setAbout(res.data.about)
        setImageUrl(res.data.imageUrl)


      
    })
    .catch(err => console.log(err))

    },[])


const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3001/Menu/Menu/'+id, {name, about, imageUrl})
    .then(res => { 
      if(res.data.updated){
        navigate('/menu')
      } else {
        console.log(res)
      }
      
        
    })
    .catch(err => console.log(err))
  }





  return (
    <div className="student-form-container">
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Edit Menu</h2>
      <div className="form-group">
        <label htmlFor="menu">Menu Name:</label>
        <input type="text" id="menu" name="menu"  value ={name}
          onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="about">About:</label>
        <input type="text" id="about" name="about"  value={about}
        onChange={(e) => setAbout(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image"  value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}/>
      </div>
      
      <button type="submit">update</button>
    </form>
  </div>
  )
}

export default EditMenu