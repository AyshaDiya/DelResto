import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { menuRouter } from './routes/menu.js'
import { Menus } from './models/Menu.js'
import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth',AdminRouter)
app.use('/student',studentRouter)
app.use('/menu', menuRouter)

app.get('/dashboard', async (req,res) => {
    try{
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const Menu = await Menus.countDocuments()
        return res.json({ok:true,student,Menu,admin})



    }catch(err) {
        return res.json(err)
    }

})


app.listen(process.env.PORT,()=>{
    console.log("server is running");

})
