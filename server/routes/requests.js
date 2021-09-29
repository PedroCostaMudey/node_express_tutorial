import express, { Router } from 'express';
//[deprecated]import bodyParser from "body-parser";

import {createRequest, readRequest, updateRequest, deleteRequest } from '../controllers/requests.js';

var urlEncodedParser = express.urlencoded({ extended: false });

const router = express.Router();

router.get('/', readRequest);
router.post('/',urlEncodedParser, createRequest);
router.patch('/:id', updateRequest);
router.delete('/:id', deleteRequest);

export default router;
