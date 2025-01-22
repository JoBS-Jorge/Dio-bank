import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Children } from "react"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}