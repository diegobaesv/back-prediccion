import { Router } from 'express';
import * as usuarioGoogleController from '../controllers/usuariosGoogle.controller';

const router = Router();

router.post('/', usuarioGoogleController.create);
router.get('/', usuarioGoogleController.findAll);
router.get('/:id', usuarioGoogleController.findOne);
router.put('/:id', usuarioGoogleController.update);
router.delete('/:id', usuarioGoogleController.deleteOne);
router.post('/updateOrCreate', usuarioGoogleController.updateOrCreate); 
router.get('/email/:email', usuarioGoogleController.findByEmail);


export default router;
