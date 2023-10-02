import React from 'react'
import { Link } from 'react-router-dom'
import Dfos from './assets/images/DFOS.png'
import Profile from './assets/images/profile.svg'
const Header = () => {
  return (
    <div className="static">
    <div className="headerBg  border-gray-200 px-2 lg:px-2 py-2.5 bg-[#101B32]">
      <div className="flex flex-wrap justify-between items-center mx-10 max-w-screen-3xl">
        <Link to="/">
          <img src={Dfos} alt="" className="mr-2 h-6 sm:h-10" />
        </Link>
        <img src={Profile} alt="" className="cursor-pointer" />
      </div>
    </div>
  </div>
  )
}

export default Header
