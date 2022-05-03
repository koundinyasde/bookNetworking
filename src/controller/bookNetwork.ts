import { Request, Response } from 'express';
import { getBooksData, addBooksData } from '../db/datalayer/books';
import { dbRes } from '../interfaces/dbRes';

export const getBooks = async (req: Request, res: Response) => {
  try {

    const data: dbRes = await getBooksData(req.query)
    return res.status(200).json({
      msg: 'success',
      data: data.data,
      count: data.count
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: 'error',
      err: err
    });
  }
};

export const addBooks = async (req: Request, res: Response) => {
  try {
    const data: dbRes = await addBooksData(req.body)
    return res.status(200).json({
      msg: 'success',
      data: data.data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: 'error',
      err: err
    });
  }
};