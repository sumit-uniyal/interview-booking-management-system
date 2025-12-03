import { Redis } from '@upstash/redis';

const redisEnabled = process.env.REDIS_ENABLED === 'true';

let redis: any;

if (redisEnabled) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
} else {
  redis = {
    get: async () => null,
    set: async () => {},
    del: async () => {},
    expire: async () => {},
  };
}

export { redis };
