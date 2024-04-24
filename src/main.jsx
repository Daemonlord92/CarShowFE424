import React from 'react'
import ReactDOM from 'react-dom/client'
import Banana from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Banana />
    </QueryClientProvider>
  </React.StrictMode>,
)
