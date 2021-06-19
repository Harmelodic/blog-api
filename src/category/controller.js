import { Router } from 'express';
import categoryService from './service.js';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/')
	.get(async (req, res) => {
		const categories = await categoryService.fetchAll();
		res.send(categories);
	});

export default router;
