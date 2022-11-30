import Footer from '../Footer'
import NavBar from '../NavBar/NavBar'
const Layout = ({children}) => {
    return ( 
        <div className='container'>
        <NavBar />
        {children}
        {/* <Footer /> */}
        </div>
     );
}
 
export default Layout;