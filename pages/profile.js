import { useAuth } from '../auth';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      {/* List user's posts */}
    </div>
  );
};

