import React,{ useState} from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const AddMenu = () => {
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const navigate = useNavigate()


const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/menu/add', {name, about, imageUrl})
    .then(res => { 
      if(res.data.added){
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
      <h2>Add Menu</h2>
      <div className="form-group">
        <label htmlFor="menu">Menu Name:</label>
        <input type="text" id="menu" name="menu" 
          onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="about">About:</label>
        <input type="text" id="about" name="about" 
        onChange={(e) => setAbout(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" 
        onChange={(e) => setImageUrl(e.target.value)}/>
      </div>
      
      <button type="submit">Add </button>
    </form>
  </div>
  )
}

export default AddMenu