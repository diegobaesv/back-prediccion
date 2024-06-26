import { Request, Response } from 'express';
import * as prediccionService from '../services/prediccion.service';

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const prediccion = await prediccionService.create(req.body);
        res.status(201).json(prediccion);
    } catch (err: any) {
        console.error(err)
        res.status(500).json({ message: err.message });
    }
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const predicciones = await prediccionService.findAll();
        res.status(200).json(predicciones);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const findById = async (req: Request, res: Response): Promise<void> => {
    try {
        const prediccion = await prediccionService.findById(req.params.id);
        if (!prediccion) {
            res.status(404).json({ message: 'Predicción no encontrada' });
        } else {
            res.status(200).json(prediccion);
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const prediccion = await prediccionService.update(req.params.id, req.body);
        if (!prediccion) {
            res.status(404).json({ message: 'Predicción no encontrada' });
        } else {
            res.status(200).json(prediccion);
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const resp = await prediccionService.deleteOne(req.params.id);
        res.status(200).json(resp);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
