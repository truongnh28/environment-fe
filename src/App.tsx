import Map from 'pages/Map';
import ResolverReportDetail from 'pages/ResolverReportDetail';
import ResolverReports from 'pages/ResolverReports';
import ReportDetailOfReportor from 'pages/ReportDetailOfReportor';
import { Route, Routes } from 'react-router-dom';
import Reportor from './pages/Reportor';
import Top10Users from 'pages/Top10Users/Top10Users';
function App() {
    return (
        <Routes>
            {/* <Route path='/resolver/report' element={<ResolverReports />} /> */}
            <Route path='/reportDetail' element={<ReportDetailOfReportor />} />
            <Route path='/reportor' element={<Reportor />} />
            <Route path='/' element={<Map />} />
            {/* <Route path="/resolver/report" element={<ResolverReportDetail />} /> */}

            <Route path='/resolver/report' element={<ResolverReports />} />
            <Route path='/reportor/top' element={<Top10Users />} />
            <Route path='/resolver/top' element={<Top10Users />} />
        </Routes>
    );
}

export default App;
