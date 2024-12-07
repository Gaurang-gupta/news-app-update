// import { useState } from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
    // const [open, setOpen] = useState(false);
    // const open = false
    // const urlParams = new URLSearchParams(window?.location?.search);
    // const myParam = urlParams?.get('target');

  return (
    <nav className='flex md:justify-between pt-7 xs:px-7 md:px-14 items-center xs:justify-left'>
        <Sidebar/>
        <Link className='xs:pl-5 sm:pl-24 md:pl-0' to='/'>
            <h1 className='font-serif text-4xl text-center'>
                The <span className='underline decoration-6 decoration-orange-400'
                >NEWS</span>
            </h1>
        </Link>
        <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">Subscribe Now</button>
    </nav>
  )
}

export default Navbar