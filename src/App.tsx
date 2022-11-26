import Map from 'pages/Map';
import ResolverReportDetail from 'pages/ResolverReportDetail';
import ResolverReports from 'pages/ResolverReports';
import ReportDetailOfReportor from 'pages/ReportDetailOfReportor';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Reportor from './pages/Reportor';
function App() {
    return (
        <Routes>
            {/* <Route path='/resolver/report' element={<ResolverReports />} /> */}
            <Route path='/reportDetail' element={<ReportDetailOfReportor />} />
            <Route path='/reportor' element={<Reportor />} />
            <Route path='/' element={<Map />} />
            {/* <Route path="/resolver/report" element={<ResolverReportDetail />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/resolver/report' element={<ResolverReportDetail />} />
        </Routes>
    );
}

export default App;
