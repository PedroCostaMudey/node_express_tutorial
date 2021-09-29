import express from "express";

import { createRequestModel } from "../models/resquests.js";

export const createRequest = async (req, res) => {

  
  createRequestModel(req, (result) => {
    try {
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};
export const readRequest = async (req, res) => {};
export const updateRequest = async (req, res) => {};
export const deleteRequest = async (req, res) => {};

export default null;
