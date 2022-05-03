// import { booktest } from 'book-networking/src/controller/bookNetwork';
import { Router } from 'express';
import { addBooks, getBooks } from '../../controller/bookNetwork';

const appRouter = Router()

appRouter.route('/book/networking').get(getBooks).put(addBooks)

export default appRouter;