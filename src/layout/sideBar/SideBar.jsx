import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'react-feather'
import { Search } from 'react-feather'
import { Bell } from 'react-feather'
import { Mail } from 'react-feather'
import { Bookmark } from 'react-feather'
import { Users } from 'react-feather'
import { User } from 'react-feather'

const SideBar = () => {
    const links = [
        {
            name: 'Home',
            icon: <Home />,
            path: '/',
        },
        {
            name: 'Explore',
            icon: <Search />,
            path: '/explore',
        },
        {
            name: 'Notifications',
            icon: <Bell />,
            path: '/notifications',
        }
        ,
        {
            name: 'Messages',
            icon: <Mail />,
            path: '/messages',
        }
        ,
        {
            name: 'Bookmarks',
            icon: <Bookmark />,
            path: '/bookmarks',
        },
        {
            name: 'Communities',
            icon: <Users />,
            path: '/communities',
        },
        {
            name: 'Profile',
            icon: <User />,
            path: '/profile',
        }

    ]
    return (
        <div className='w-[275px] min-h-screen ' >
            <div className='p-2 min-h-[52px] cursor-pointer'>
                <svg fill='white' width={28} viewBox="0 0 24 24" aria-hidden="true" className="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <ul >
                {links.map((link, index) => (
                    <Link to={link.path} key={index}>
                        <li key={index} className='py-1  w-auto hover:bg-gray-600 rounded-full min-h-[52px] cursor-pointer'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                                    {link.icon}
                                </div>
                                <span className='text-white text-xl'>{link.name}</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div >
    )
}

export default SideBar