import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Layout from "./layouts/Layout"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import Home from "./pages/Home/Home"

import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "./settings/constant"


const ProtectedRoute = ({ children }) => {
    const isAuth = true

    return !isAuth ? <Navigate to="/login" replace /> : children
}

const ROUTES = () => {
    return (
        <Router>
            <Routes>
                <Route path={LOGIN_PAGE} element={
                    <ProtectedRoute>
                        <Suspense fallback={"chargements..."}>
                            <Login />
                        </Suspense>
                    </ProtectedRoute>
                } />
                <Route path={REGISTER_PAGE} element={
                    <ProtectedRoute>
                        <Suspense fallback={"chargements..."}>
                            <Register />
                        </Suspense>
                    </ProtectedRoute>
                } />
                <Route path={HOME_PAGE} element={
                    <ProtectedRoute>
                        <Layout>
                            <Suspense fallback={"chargements..."}>
                                <Home />
                            </Suspense>
                        </Layout>
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    )
}

export default ROUTES