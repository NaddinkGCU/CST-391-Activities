import { Router } from 'express';
import * as AlbumsController from './albums.controller.ts';


const router = Router();
router
    .route('/albums')
    .get(AlbumsController.readAlbums);

export default router;