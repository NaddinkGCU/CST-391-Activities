import { Router } from 'express';
import { getArtists } from './artists.controller.ts';


const router = Router();
router
    .route('/artists')
    .get(getArtists);

export default router;