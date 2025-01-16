import './App.css';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className='dark:bg-medium-gray'>
      <Header />
      <div className="max-w-7xl mx-auto p-5 min-h-screen">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
