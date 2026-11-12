import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  );
}

export default App;