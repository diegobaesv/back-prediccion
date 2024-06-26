import { Schema, model, Document } from 'mongoose';

export interface IUsuarioGoogle extends Document {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    fechaCreacion: Date;
    estadoAuditoria: number;
    fechaNacimiento: string;
    estatura: number;
    peso: number;
}

const usuarioGoogleSchema = new Schema({
    id: { type: String,  },
    email: { type: String, required: true },
    verified_email: { type: Boolean },
    name: { type: String},
    given_name: { type: String},
    family_name: { type: String},
    picture: { type: String},
    fechaCreacion: { type: Date, default: Date.now },
    estadoAuditoria: { type: Number, default: 1 },
    fechaNacimiento: { type: String, default: "" },
    estatura: { type: Number, default: 0 },
    peso: { type: Number, default: 0 }
}, {collection: 'usuariosGoogle'});

//const UserGoogle = model<IUserGoogle>('usuariosGoogle', userGoogleSchema);
//export default UserGoogle;

export default model<IUsuarioGoogle>('usuariosGoogle',usuarioGoogleSchema);