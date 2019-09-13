import React from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Document from '!babel-loader!mdx-loader!./document.mdx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Document />
    </div>
  );
};

export default App;
