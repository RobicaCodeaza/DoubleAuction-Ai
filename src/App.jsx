import { Button } from '@/components/ui/button'
// import Dashboard from './pages/Dashboard'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import AppLayout from './ui/AppLayout'
import Agenti from './pages/Agenti'
import Tranzactii from './pages/Tranzactii'
import StatisticiIndividuale from './pages/StatisticiIndividuale'

function App() {
    return (
        // <div className="flex min-h-svh flex-col items-center justify-center">
        //     <Dashboard></Dashboard>
        // </div>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout></AppLayout>}>
                    <Route
                        index
                        element={<Navigate replace to="dashboard"></Navigate>}
                    ></Route>
                    <Route
                        path="dashboard"
                        element={<Dashboard></Dashboard>}
                    ></Route>
                    <Route path="agenti" element={<Agenti></Agenti>}></Route>
                    <Route
                        path="tranzactii"
                        element={<Tranzactii></Tranzactii>}
                    ></Route>
                    <Route
                        path="individ"
                        element={
                            <StatisticiIndividuale></StatisticiIndividuale>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
