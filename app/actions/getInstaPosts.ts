'use server';

import { redis } from '@/lib/redis';
import axios from 'axios';

export const getInstagramBussinessID = async () => {
  try {
    const redisData = await redis.get('igID');
    if (redisData) {
      return redisData;
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_FACEBOOK_GRAPH}${process.env.NEXT_PUBLIC_INSTA_PAGE_ID}?fields=instagram_business_account&access_token=${process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN}`
    );
    await redis.set('igID', response.data.instagram_business_account.id);

    return response.data.instagram_business_account.id;
  } catch (error) {
    return 'Error fetching IG Business ID' + error;
  }
};

export const getInstaPost = async (igID: any, limit?: number) => {
  try {
    const cacheKey = limit ? `igPost:${limit}` : 'igPost:all';
    const redisData = await redis.get(cacheKey);
    if (redisData) {
      return redisData;
    }
    const addLimit = limit ? `&limit=${limit}` : '';

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_FACEBOOK_GRAPH}${igID}/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp,permalink,like_count,comments_count${addLimit}&access_token=${process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN}`
    );
    const posts = response.data.data;
    await redis.set(cacheKey, JSON.stringify(posts));
    return posts;
  } catch (error) {
    console.error('Error fetching IG posts', error);
  }
};
