import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

// import Dashboard from './pages/Dashboard'
import Dashboard from './pages/Dashboard'

import AppLayout from './ui/AppLayout'
import Agenti from './pages/Agenti'
import Tranzactii from './pages/Tranzactii'
import StatisticiIndividuale from './pages/StatisticiIndividuale'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
})

function App() {
    return (
        // <div className="flex min-h-svh flex-col items-center justify-center">
        //     <Dashboard></Dashboard>
        // </div>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout></AppLayout>}>
                        <Route
                            index
                            element={
                                <Navigate replace to="dashboard"></Navigate>
                            }
                        ></Route>
                        <Route
                            path="dashboard"
                            element={<Dashboard></Dashboard>}
                        ></Route>
                        <Route
                            path="agenti"
                            element={<Agenti></Agenti>}
                        ></Route>
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
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: '8px' }}
                toastOptions={{
                    success: { duration: 3000 },
                    error: { duration: 5000 },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        backgroundColor: '#f0f9ff',
                        color: '#0f486b',
                    },
                }}
            ></Toaster>
        </QueryClientProvider>
    )
}

export default App
