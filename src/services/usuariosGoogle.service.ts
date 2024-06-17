import UsuariosGoogle, { IUsuarioGoogle } from "../models/usuariosGoogle.model";

export const create = async (userData: IUsuarioGoogle): Promise<IUsuarioGoogle> => {
    const user = new UsuariosGoogle(userData);
    return await user.save();
};

export const findAll = async (): Promise<IUsuarioGoogle[]> => {
    return await UsuariosGoogle.find();
};

export const findOne = async (id: string): Promise<IUsuarioGoogle | null> => {
    return await UsuariosGoogle.findOne({id: id})
};

export const update = async (id: string, updateData: Partial<IUsuarioGoogle>): Promise<IUsuarioGoogle | null> => {
    return await UsuariosGoogle.findByIdAndUpdate(id, updateData, { new: true });
};

export const updateOrCreate = async (userData: IUsuarioGoogle): Promise<IUsuarioGoogle> => {
    try {
        const user = await UsuariosGoogle.findOneAndUpdate(
            { id: userData.id }, // Condición para buscar el usuario por el campo 'id'
            userData,            // Datos para actualizar
            { new: true, upsert: true } // 'new: true' para devolver el documento modificado, 'upsert: true' para crear uno nuevo si no existe
        );
        return user;
    } catch (error:any) {
        throw new Error(`Error al actualizar o crear el usuario: ${error.message}`);
    }
};

/*export const deleteOne = async (id: string): Promise<IUsuarioGoogle | null> => {
    //return await UserGoogle.findByIdAndRemove(id);
};
*/
