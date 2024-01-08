import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {

  return (
    <>
       <Router>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route exact path="/table" element={<LoginForm />} />
          </Routes>
    </Router>
    </>
  )
}

export default App
