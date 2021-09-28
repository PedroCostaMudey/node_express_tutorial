import express from 'express';


export const createRequest = async(req, res) => {
  
  const response = {...res}

  console.log(response);
  
  try{
    res.status(200).json(response);
  }
  catch(error){
    res.status(400).json({message: error.message});
  }
}
export const readRequest = async(req, res) => {}
export const updateRequest = async(req, res) => {}
export const deleteRequest = async(req, res) => {}

export default null;