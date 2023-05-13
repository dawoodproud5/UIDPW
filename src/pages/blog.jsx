import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import SignIn from '../../components/AdminDashBoad/SignIn.jsx';

function blog() {
    return (

        <div className="w-full  flex  flex-col items-center justify-center bg-cover bg-center  bg-[url('/Images/Blogs/glow-bg.svg')]">
            <Navbar bg_color={"bg-blue"} position={'fixed'} />
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <SignIn />
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default blog