import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#f2f2f2', marginTop: 'auto', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
