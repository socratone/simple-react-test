import { rest } from 'msw';

export const handlers = [
  rest.get('https://koreanjson.com/users/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '소크라'
      })
    );
  }),
  rest.get('https://koreanjson.com/users/2', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '테스형'
      })
    );
  }),
  rest.get('https://koreanjson.com/users/3', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '어디가'
      })
    );
  }),
];
