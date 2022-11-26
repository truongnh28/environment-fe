import { Route, Routes } from 'react-router-dom';
import Reportor from './pages/Reportor';
function App() {
    return (
        <Routes>
            {/* <Route path='/' element={<Counter />} /> */}
            {/* <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} /> */}
            <Route path='/' element={<Reportor />} />
        </Routes>
    );
}

export default App;
