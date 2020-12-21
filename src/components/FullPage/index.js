import React from 'react';
import Header from './Header';
import Footer from './Footer';

function FullPage({ children }) {
  return (
    <div class='flex flex-col h-screen justify-between'>
      <Header currentPage='meal-recipe' />
      <main class='mt-5 mb-auto h-10 bg-green-500'>{children}</main>
      <Footer />
    </div>
  );
}

export default FullPage;
