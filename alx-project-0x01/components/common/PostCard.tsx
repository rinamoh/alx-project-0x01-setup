import React from 'react';

interface PostCardProps {
  title: string;
  excerpt?: string;
  onClick?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', cursor: onClick ? 'pointer' : 'default' }}>
      <h2>{title}</h2>
      {excerpt && <p>{excerpt}</p>}
    </div>
  );
};

export default PostCard;
