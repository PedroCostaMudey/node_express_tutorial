import express from "express";

import { createRequestModel, readRequestModel, updateRequestModel, deleteRequestModel } from "../models/resquests.js";

export const createRequest = async (req, res) => {
  
  createRequestModel(req, (result) => {
    try {
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

export const readRequest = async (req, res) => {

  readRequestModel(req, (result) => {
    try {
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

export const updateRequest = async (req, res) => {

  updateRequestModel(req, (result) => {
    try {
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

export const deleteRequest = async (req, res) => {
  deleteRequestModel(req, (result) => {
    try {
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

export default null;
