import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const PublicLayout = ({children}) => {
    return (
        <div className='PublicLayout'>
            <Navbar/>
            <main className='mainPublicLayout'> {children} </main>
            <Footer/>
        </div>
    )
}

export default PublicLayout
