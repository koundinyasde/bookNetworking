import express from 'express';
import appRouter from './app';

const router = express.Router()

const defaultRoutes = [
  {
    path: '/',
    route: appRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;