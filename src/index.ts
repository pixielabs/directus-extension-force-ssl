import { defineHook } from '@directus/extensions-sdk';
import { Request, Response, NextFunction } from 'express';

type ExpressMiddleware = (req: Request, res: Response, next: NextFunction) => void;

// Inspired by https://github.com/paulomcnally/node-heroku-ssl-redirect/ but
// not trying to use process.env at compile time, because rollup doesn't
// support it!
const sslRedirect = (environment: string): ExpressMiddleware => (req, res, next) => {
  if (environment === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(`https://${req.hostname}${req.originalUrl}`);
    } else {
      next();
    }
  } else {
    next();
  }
}

export default defineHook(({ init }) => {
  // Add our SSL redirect middleware before everything else
	init('middlewares.before', ({app}) => {
    app.use(sslRedirect(app.settings.env || 'production'));
	});
});
