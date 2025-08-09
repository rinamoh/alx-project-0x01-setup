import Header from "@/components/layout/Header";
import React from 'react';
import PostCard from '../../components/common/PostCard';


const PostsPage: React.FC = () => {
  // Example post data
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post excerpt.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post excerpt.' },
  ];

  return (
    <div className="flex flex-col h-screen">
    <Header/>
    <main style={{ padding: '1rem' }}>
      <h1>Posts</h1>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          onClick={() => alert(`Clicked post ${post.id}`)}
        />
      ))}
    </main>
    </div>
  );
};

export default PostsPage;
