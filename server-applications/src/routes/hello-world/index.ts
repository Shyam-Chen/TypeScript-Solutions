import { Elysia } from 'elysia';

const router = new Elysia({ prefix: '/hello-world' });

router.get('', () => {
  return { message: 'Hello, World!' };
});

export default router;
