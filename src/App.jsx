import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DataTable from './components/DataTable';

function App() {

  return (
    <>
       <Router>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/table" element={<DataTable />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
