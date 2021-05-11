import { rest } from 'msw';

export const handlers = [
  rest.get('/users/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '이정도'
      })
    );
  }),
  rest.get('/users/2', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '김재완'
      })
    );
  }),
  rest.get('/users/3', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '김성은'
      })
    );
  }),
];
