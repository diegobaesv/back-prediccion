import { Request, Response } from 'express';
import * as userService from '../services/usuariosGoogle.service';

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.create(req.body);
        res.status(201).json(user);
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('findAll')
        const users = await userService.findAll();
        console.log('users',users)
        res.status(200).json(users);
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }
};

export const findOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.findOne(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.update(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
    try {
        /*const user = await userService.deleteOne(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(204).send();
        }*/
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }
};

export const updateOrCreate = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.updateOrCreate(req.body);
        res.status(200).json(user);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};


export const findByEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.params;
        const result = await userService.findByEmail(email);
        res.status(200).json(result);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};