import {Router} from 'express';
import postService from './service';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/')
    .get((req, res) =>
      postService.fetchAll().then((posts) =>
        res.send(posts)));

router.route('/:id')
    .get((req, res) =>
      postService.fetchById(parseInt(req.params.id)).then((post) =>
        res.send(post)));

export default router;
