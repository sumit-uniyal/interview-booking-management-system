'use client';

import Blog from '../components/blog/Blog';
import { useEffect, useState } from 'react';
import {
  getInstagramBussinessID,
  getInstaPost,
} from '../../actions/getInstaPosts';

const BlogPage = () => {
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
      const posts = await getInstaPost(igID);
      setPostData(posts);
    };
    fetchPosts();
  }, [igID]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blogs</h1>
      </div>
      <Blog data={postData} />
    </div>
  );
};

export default BlogPage;
