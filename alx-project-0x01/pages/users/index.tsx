import React from 'react';

const UsersPage: React.FC = () => {
  // Example user data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default UsersPage;
