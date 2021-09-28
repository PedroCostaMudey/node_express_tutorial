import express, { Router } from 'express';

import {createRequest, readRequest, updateRequest, deleteRequest } from '../controllers/requests.js';

const router = express.Router();

router.get('/', readRequest);
router.post('/', createRequest);
router.patch('/:id', updateRequest);
router.delete('/:id', deleteRequest);

export default router;
