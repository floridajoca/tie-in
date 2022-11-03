import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpBusiness from "./pages/signup/SignUpBusiness";
import SignUpStudent from "./pages/signup/SignUpStudent";
import SignUpLandingPage from "./pages/signup/SignUpLandingPage";
import UploadBusinessProject from "./pages/UploadBusinessProject";
import UploadStudentProject from "./pages/UploadStudentProject";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signuplanding' element={<SignUpLandingPage/>}/>
                    <Route path='/signup/student' element={<SignUpStudent/>}/>
                    <Route path='/signup/business' element={<SignUpBusiness/>}/>
                    <Route path='/uploadstudentproject' element={<UploadStudentProject/>}/>
                    <Route path='/uploadbusinessproject' element={<UploadBusinessProject/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
