import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
    // afterSignOutUrl='/Home'
   afterSignOutUrl='/'
      afterSignInUrl='/Home'
      afterSignUpUrl='/Home'
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
)

