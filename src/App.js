import React from 'react';
import { AppProvider } from './context';  // Ensure correct import
import BookList from './components/BookList/BookList';  // Import BookList component

function App() {
  return (
    <AppProvider>
      <BookList />
    </AppProvider>
  );
}

export default App;
