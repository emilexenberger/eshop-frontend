import { AuthProvider } from './hooks/useContext/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import RoutesComponent from './components/common/RoutesComponent';
import Footer from './components/common/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='container my-3'>
          <div>Website - Emil Exenberger</div>
          <Navbar />
          <RoutesComponent />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
