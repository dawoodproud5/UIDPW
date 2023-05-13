import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ContactCard from '../../components/ContactUs/ContactCard';

function ContactUs() {
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center flex-col bg-cover bg-center  bg-[url('/Images/ContactUs/contactus.jpg')]">
                <Navbar bg_color={"bg-blue"} position={'fixed'} />
                <div className="">
                    <ContactCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
