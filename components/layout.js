
import Navbar from "./navbar"
import Footer from "./footer"


function Layout({children}){
    return(
        <div>
            <Navbar/>
            <h1>{children}</h1>
            <Footer/>
        </div>
    )
}
export default Layout