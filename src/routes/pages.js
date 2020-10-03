import {Router} from 'express';
import postService from '../services/post';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/:id')
    .get((req, res, next) => {
      postService.fetchPost(parseInt(req.params.id))
          .then((post) => {
            res.render('index', {
              title: `${post.title} | Scribbles`,
              description: post.description || post.title,
            });
          });
    });

export default router;
