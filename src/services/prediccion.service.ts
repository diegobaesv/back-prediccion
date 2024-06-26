import { ObjectId } from 'mongodb';
import Prediccion, { IPrediccion } from '../models/prediccion.model';

export const create = async (prediccionData: IPrediccion): Promise<IPrediccion> => {
    try {
        const prediccion = new Prediccion(prediccionData);
        return await prediccion.save();
    } catch (error:any) {
        throw new Error(`Error al crear la predicción: ${error.message}`);
    }
};

export const findAll = async (): Promise<IPrediccion[]> => {
    try {
        const predicciones = await Prediccion.find();
        console.log("Datos recuperados en el servicio:", predicciones);
        return predicciones;
    } catch (error:any) {
        throw new Error(`Error al recuperar las predicciones: ${error.message}`);
    }
};

export const findById = async (id: string): Promise<IPrediccion[] | null> => {
    try {
        const prediccion = await Prediccion.find({
            idUsuarioGoogle: id
        });
        return prediccion;
    } catch (error:any) {
        throw new Error(`Error al encontrar la predicción: ${error.message}`);
    }
};

export const update = async (id: string, updateData: Partial<IPrediccion>): Promise<IPrediccion | null> => {
    try {
        return await Prediccion.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error:any) {
        throw new Error(`Error al actualizar la predicción: ${error.message}`);
    }
};

export const deleteOne = async (id: string): Promise<any> => {
    try {
        console.log('eliminando:',id)
        return await Prediccion.deleteOne({ _id: new ObjectId(id) })
    } catch (error:any) {
        throw new Error(`Error al eliminar la predicción: ${error.message}`);
    }
};
