import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const CreatePost = () => {
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to save the post
    router.push('/');
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Write your post in markdown..."
        />
        <button type="submit">Publish</button>
      </form>
      <h2>Preview:</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CreatePost;