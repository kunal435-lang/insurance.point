import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: 'bule', position: 'fixed', width: '98%', bottom: 0 }}>
      &copy; {new Date().getFullYear()} Insurance App
    </footer>
  );
}
