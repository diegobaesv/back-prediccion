import { Router } from 'express';
import * as prediccionController from '../controllers/prediccion.controller';

const router = Router();

router.post('/', prediccionController.create);
router.get('/', prediccionController.findAll);
router.get('/:id', prediccionController.findById);
router.put('/:id', prediccionController.update);
router.delete('/:id', prediccionController.deleteOne);

export default router;
