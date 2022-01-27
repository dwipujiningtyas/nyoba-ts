import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

//untuk memastikan bahwa menggunakan query dalam apk
ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>, 
  document.getElementById('root')
);
