import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

import { QueryClient, QueryClientProvider
 } from "@tanstack/react-query";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <QueryClientProvider client = {queryClient}>
    <AuthProvider>
    <App />
    </AuthProvider>
  </QueryClientProvider>
     
   
  </StrictMode>,
)
