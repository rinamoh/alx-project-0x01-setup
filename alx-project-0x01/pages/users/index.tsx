import Header from "@/components/layout/Header";
import React from 'react';


const UsersPage: React.FC = () => {
  // Example user data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header/>
    <main style={{ padding: '1rem' }}>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
    </div>
  );
};

export default UsersPage;
