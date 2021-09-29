import express, { Router } from 'express';
//[deprecated]import bodyParser from "body-parser";

import {createRequest, readRequest, updateRequest, deleteRequest } from '../controllers/requests.js';

var urlEncodedParser = express.urlencoded({ extended: false });

const router = express.Router();

router.post('/POST', urlEncodedParser, createRequest);
router.post('/GET', urlEncodedParser, readRequest);
router.post('/UPDATE', urlEncodedParser, updateRequest);
router.post('/DELETE', urlEncodedParser, deleteRequest);

export default router; 
