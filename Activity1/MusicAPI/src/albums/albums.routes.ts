import { Router } from 'express';
import { getAlbums } from './albums.controller.ts';


const router = Router();
router
    .route('/albums')
    .get(getAlbums);

export default router;