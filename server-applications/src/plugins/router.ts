import { Elysia } from 'elysia';

import helloWorld from '~/routes/hello-world';

const router = new Elysia({ name: 'router', prefix: '/api' });

router.use(helloWorld);

export default router;
