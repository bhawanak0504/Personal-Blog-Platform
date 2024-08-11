import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { currentUser } = useAuth();
  const { id } = router.query; // Get post ID from the query parameters

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const postRef = db.collection('posts').doc(id);
          const doc = await postRef.get();
          if (doc.exists && doc.data().authorId === currentUser.uid) {
            setTitle(doc.data().title);
            setContent(doc.data().content);
          } else {
            router.push('/');
          }
        } catch (error) {
          console.error('Error fetching post:', error);
          router.push('/');
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, currentUser, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const postRef = db.collection('posts').doc(id);
      await postRef.update({
        title,
        content,
        updatedAt: new Date(),
      });
      router.push(`/posts/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={loading}>
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default EditPost;