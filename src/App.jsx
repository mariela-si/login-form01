import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DataTable from './components/DataTable';
import Test from './components/Test';

function App() {

  return (
    <>
       <Router>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/table" element={<DataTable />} />
            <Route path="/test" element={<Test />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
