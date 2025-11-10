import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';
import { healthcheckPlugin } from 'elysia-healthcheck';

import router from '~/plugins/router.ts';
import mongodb from '~/services/mongodb.ts';

const app = new Elysia();

app.use(cors());
app.use(healthcheckPlugin());

app.use(router);

try {
  await mongodb.connect();

  app.listen(
    {
      hostname: '0.0.0.0',
      port: 3000,
    },
    (server) => {
      console.log(`🦊 Server listening at ${server.url.origin}`);
    },
  );
} catch (error) {
  console.error(error);
  await mongodb.disconnect();
  process.exit(1);
}
