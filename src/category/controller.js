import {Router} from 'express';
import categoryService from './service';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/')
    .get((req, res) =>
      categoryService.fetchAll().then((categories) =>
        res.send(categories)));

export default router;
