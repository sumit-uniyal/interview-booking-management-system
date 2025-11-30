'use client';

import { useEffect, useState } from 'react';
import Blog from './blog/Blog';
import {
  getInstagramBussinessID,
  getInstaPost,
} from '../actions/getInstaPosts';

const BlogSection = () => {
  const [igID, setIgID] = useState('');
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchIG = async () => {
      const id = await getInstagramBussinessID();
      setIgID(id);
    };
    fetchIG();
  }, []);

  useEffect(() => {
    if (!igID) return;
    const fetchPosts = async () => {
      const posts = await getInstaPost(igID, 3);
      setPostData(posts);
    };
    fetchPosts();
  }, [igID]);

  return (
    <section className="w-full py-20 bg-linear-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Premium Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              Latest From Our Blog
            </h2>
            <p className="mt-3 text-gray-600 text-center">
              Divine Moments on Instagram (Spiritual tone)
            </p>
          </div>

          <Blog data={postData} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
