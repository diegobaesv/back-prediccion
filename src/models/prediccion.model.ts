import { Schema, model, Document } from 'mongoose';

export interface IPrediccion extends Document {
    inputs: {
        age: number;
        height: number;
        weight: number;
        pressure_level: number;
        step_level: number;
        rest_level: number;
        smoking_consumption_level: number;
        drink_consumption_level: number;
    };
    output: {
        predict: number;
        recomendaciones: string;
        success: boolean;
    };
    idUsuarioGoogle: string;
    fechaCreacion: Date;
}

const prediccionSchema = new Schema<IPrediccion>({
    inputs: {
        age: { type: Number, required: true },
        height: { type: Number, required: true },
        weight: { type: Number, required: true },
        pressure_level: { type: Number, required: true },
        step_level: { type: Number, required: true },
        rest_level: { type: Number, required: true },
        smoking_consumption_level: { type: Number, required: true },
        drink_consumption_level: { type: Number, required: true }
    },
    output: {
        predict: { type: Number, required: true },
        recomendaciones: { type: String,  default: "" },
        success: { type: Boolean, required: true }
    },
    idUsuarioGoogle: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now }
}, { collection: 'predicciones' });

const Prediccion = model<IPrediccion>('Prediccion', prediccionSchema);
export default Prediccion;
