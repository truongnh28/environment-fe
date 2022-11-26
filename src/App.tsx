import ResolverReportDetail from 'pages/ResolverReportDetail';
import ResolverReports from 'pages/ResolverReports';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/resolver/report" element={<ResolverReports />} />
            {/* <Route path="/resolver/report" element={<ResolverReportDetail />} /> */}
        </Routes>
    );
}

export default App;
