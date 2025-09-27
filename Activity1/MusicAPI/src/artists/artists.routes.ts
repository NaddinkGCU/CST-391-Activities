import { Router } from 'express';
import * as ArtistsController from './artists.controller.ts';

const router = Router();
router
    .route('/artists')
    .get(ArtistsController.readArtists);

export default router;