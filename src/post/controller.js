import { Router } from 'express';
import postService from './service.js';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/')
	.get(async (req, res) => {
		const posts = await postService.fetchAll();
		res.send(posts);
	});

router.route('/:id')
	.get(async (req, res) => {
		const post = await postService.fetchById(parseInt(req.params.id));
		res.send(post);
	});

export default router;
