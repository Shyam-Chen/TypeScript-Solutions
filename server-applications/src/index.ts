import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';

import router from '~/plugins/router.ts';

const app = new Elysia();

app.use(cors());

app.use(router);

app.listen(
  {
    hostname: '0.0.0.0',
    port: 3000,
  },
  (server) => {
    console.log(`Server listening at ${server.url.origin}`);
  },
);
