import express from 'express'
import { Menus} from '../models/Menu.js'

const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/add',verifyAdmin, async (req, res) => {
    try {
        const {name, about,imageUrl} = req.body;
       
        const newmenu = new Menus({
            name,
            about,
            imageUrl
        })
        await newmenu.save()
        return res.json({added: true})
    } catch(err) {
        return res.json({message: "Error in adding menu"})
    }
})

router.get('/menu', async (req,res) => {
    try{
        const menu =  await Menus.find()
        return res.json(menu)
    }catch(err) {
        return res.json(err)
    }

})

router.get('/Menu/:id', async (req,res) =>{
    
    try{
        const id = req.params.id;
        const Menu =  await Menus.findById({_id: id})
        return res.json(Menu)
    }catch(err) {
        return res.json(err)
    }
})


router.put('/Menu/:id', async (req,res) =>{
    
    try{
        const id = req.params.id;
        const Menu =  await Menus.findByIdAndUpdate({_id: id},req.body)
        return res.json({updated:true,Menu})
    }catch(err) {
        return res.json(err)
    }
})


router.delete('/Menu/:id', async (req,res) =>{
    try{
        const id = req.params.id;
        const Menu =  await Menus.findByIdAndDelete({_id: id})
        return res.json({deleted:true,Menu})
    }catch(err) {
        return res.json(err)
    }

})



export {router as menuRouter}