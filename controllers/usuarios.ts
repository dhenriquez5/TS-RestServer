
import { Request, Response } from 'express';
import Usuario from '../models/Usuario';
import {  } from "sequelize";

export const getUsuarios = async (req: Request, res: Response) => {

    const usuariosList = await Usuario.findAll(); 

    res.json({usuariosList});

}


export const getUsuario = async(req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id) || [];
    res.json({usuario});
}

export const postUsuario = async(req: Request, res: Response) => {
    const  {body}  = req;
    try {

        const existeEmail = await Usuario.findOne({
            where:{
                email: body.email
            }
        })

        if(existeEmail) return res.status(400).json({msg:'El Correo Ya existe'});

        const usuario:any = new Usuario(body);
        await usuario.save(usuario);

        res.json({usuario});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Ha ocurrido un error ',
        })
    }

   
}

export const putUsuario = async(req: Request, res: Response) => {
    const  body  = req.body;
    const {id} = req.params;

    try {

        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(400).json({msg:'No existe usuario con id '+id})
        }

        await usuario.update(body);

        res.json({usuario});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Ha ocurrido un error ',
        })
    }
    
}


export const deleteUsuario = async(req: Request, res: Response) => {
    const {id} = req.params;
    
    const usuario:any = await Usuario.findByPk(id);

    if(!usuario){
        return res.status(400).json({msg:'No existe usuario con id '+id})
    }

    // await Usuario.destroy(usuario);

    await usuario.update({estado:false});


    res.json({
        msg: 'deleteUsuario',
        id
    })
}



