import axios from 'axios'
import React,{useEffect,useState} from 'react'
import BookCard from './BookCard'
import '../css/Book.css'

const Menu = ({role}) => {
  const [menu,setMenu] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/Menu/menu')
    .then(res => {
      setMenu(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))

  },[])

  return (
    <div className='book-list'>
      {
        menu.map(Menu => {
           return <BookCard key={Menu.id} Menu = {Menu} role={role}></BookCard>
        })
      }
    </div>
    
  )
}

export default Menu