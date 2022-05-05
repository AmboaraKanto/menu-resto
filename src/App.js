import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className='mt-2'>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
