import React from 'react';
import HeaderOption from './HeaderOption';
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from '@heroicons/react/outline'

function HeaderOptions (props) {
    return (
        <div className='flex w-full text-gray-700  justify-center text-sm lg:text-basd lg:justify-start lg:space-x-36
            lg:pl-52 border-b'>
            {/* LEFT */}
            <div className='flex space-x-6'>
                <HeaderOption Icon={SearchIcon} title={"All"} selected/>
                <HeaderOption Icon={PhotographIcon} title={"Images"}/>
                <HeaderOption Icon={PlayIcon} title={"Vidoes"}/>
                <HeaderOption Icon={NewspaperIcon} title={"News"}/>
                <HeaderOption Icon={MapIcon} title={"Maps"}/>
                <HeaderOption Icon={DotsVerticalIcon} title={"More"}/>
                
            </div>

            {/* RIGHT */}
            <div className='flex space-x-4'>
                <p className='link'>Settings</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    );
}

export default HeaderOptions;