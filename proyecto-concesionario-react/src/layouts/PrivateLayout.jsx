import React from 'react'
import Sidebar from '../components/Sidebar'

const PrivateLayout = ({children}) => {
    return (
        <div className='PrivateLayout'>
            <Sidebar/>
            <main className='MainPrivateLayout'>
                {children}
            </main>
        </div>
    )
}

export default PrivateLayout
