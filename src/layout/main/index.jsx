import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sideBar/SideBar'
import RightBar from '../rightBar/RightBar'

const MainLayout = () => {
    return (
        <div className='max-w-[1265px] mx-auto flex'>
            <SideBar />
            <div className='flex-1 flex gap-[30px]'>
                <main className='flex-1 border-x border-gray-800 max-w-[600px]'>
                    <Outlet />
                </main>
                <RightBar />
            </div>
        </div>
    )
}

export default MainLayout