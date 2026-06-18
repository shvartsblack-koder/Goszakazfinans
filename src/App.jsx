import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Toaster />
        <CookieConsent />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
