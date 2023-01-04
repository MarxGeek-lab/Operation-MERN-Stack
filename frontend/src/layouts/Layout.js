import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import LayoutStyle from "./Layout.module.css"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={LayoutStyle.body_content}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout