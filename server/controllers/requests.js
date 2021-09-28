import express from "express";
import { createRequestModel } from "../models/resquests.js";

export const createRequest = async (req, res) => {
  const FAKE_REQUEST = {
    0: { sql_argument: "arg1", sql_value: "val1" },
    1: { sql_argument: "arg2", sql_value: "val2" },
    2: { sql_argument: "arg3", sql_value: "val3" },
  };

  //const response = {...res}

  //console.log(response);

  createRequestModel(FAKE_REQUEST, () => {
    try {
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};
export const readRequest = async (req, res) => {};
export const updateRequest = async (req, res) => {};
export const deleteRequest = async (req, res) => {};

export default null;
