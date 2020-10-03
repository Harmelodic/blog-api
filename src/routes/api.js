import {Router} from 'express';
import postService from '../services/post';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/posts')
    .get((req, res, next) => {
      postService.fetchPosts()
          .then((posts) => {
            res.send(posts);
          });
    });

router.route('/posts/:id')
    .get((req, res, next) => {
      postService.fetchPost(parseInt(req.params.id))
          .then((post) => {
            res.send(post);
          });
    });

export default router;
