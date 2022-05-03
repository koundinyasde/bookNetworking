import { Op, Sequelize } from 'sequelize';
import sequelize from '../';
import { dbRes } from '../../interfaces/dbRes';

export async function getBooksData(params: any = {}): Promise<dbRes> {
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
    count: 0,
  };
  const sql: Sequelize = await sequelize();
  try {
    const limit = Number(params.limit) || 10;
    const offset = Number(params.offset) || 0;
    const {
      models: { book_networking },
    } = sql;
    let filters: any = {
      where: {
        // is_active: true
      },
      limit,
      offset,
    };

    if (params.id) {
      filters.where = {
        id: {
          [Op.eq]: params.id,
        },
      };
    }

    if (params.search) {
      filters.where = {
        ...filters.where,
        [Op.or]: [{ title: { [Op.like]: '%' + params.search + '%' } }, { isbn: { [Op.like]: '%' + params.search + '%' } }],
      };
    }

    const data = await book_networking.findAndCountAll({
      ...filters,
    });
    res.data = data.rows;
    res.count = data.count;
  } catch (err) {
    console.log(err);
    res.err = err;
  }
  sql.close();
  return res;
}

export async function addBooksData(body?: any): Promise<dbRes> {
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  const sql: Sequelize = await sequelize();
  try {
    const {
      models: { book_networking },
    } = sql;
    let data: any = await book_networking.create({
      ...body,
      created_on: Date.now(),
      updated_on: Date.now(),
      is_active: true,
    });
    res.data = data;
  } catch (err) {
    console.log(err);
    res.err = err;
  }
  sql.close();
  return res;
}
