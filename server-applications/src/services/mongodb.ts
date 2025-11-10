import { type Db, MongoClient } from 'mongodb';

const client = new MongoClient(Bun.env.MONGODB_URL);

let database: Db | null = null;

export default {
  async connect() {
    if (!database) {
      await client.connect();
      console.log('MongoDB 已成功連接');
      database = client.db();
    }
  },
  async disconnect() {
    if (client) {
      await client.close();
      console.log('MongoDB 連線已關閉');
      database = null;
    }
  },
  getDb() {
    if (!database) throw new Error('尚未初始化 MongoDB，請呼叫 connect() 方法');
    return database;
  },
};
