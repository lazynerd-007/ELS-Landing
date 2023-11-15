import { Dropdown } from 'flowbite-react';
import { RxHamburgerMenu } from "react-icons/rx";


import React from 'react'

const NavDropdown = () => {
    return (
        <div>
            <Dropdown
                className="right-0 text-[#32475CDE] w-[20rem]"
                label="" dismissOnClick={false} renderTrigger={() =>
                    <button className="btn bg-transparent border-none text-white rounded-none hover:bg-transparent" title="Notifications">
                        <RxHamburgerMenu className='w-5 h-5' />
                    </button>
                }>
                <Dropdown.Item className="flex justify-between">
                    <p className="font-bold">
                        Notifications
                    </p>
                    <p className="text-[#696CFF] bg-[#666CFF1F]/10 px-2 py-1 rounded-lg">
                        8 New
                    </p>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="inline-block">
                    <p className="font-bold text-left">
                        Congratulations
                    </p>
                    <span className="flex mt-2 justify-between">
                        <p className="text-[0.75rem]">
                            A new customer just onboarding on app
                        </p>
                        <p className="text-[0.75rem]">
                            Today
                        </p>
                    </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="inline-block">
                    <p className="font-bold text-left">
                        New user registered.
                    </p>
                    <span className="flex mt-2 justify-between">
                        <p className="text-[0.75rem]">
                            5 hours ago
                        </p>
                        <p className="text-[0.75rem]">
                            Yesterday
                        </p>
                    </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="inline-block">
                    <p className="font-bold text-left">
                        New message received 👋
                    </p>
                    <span className="flex mt-2 justify-between">
                        <p className="text-[0.75rem]">
                            You have 10 unread messages
                        </p>
                        <p className="text-[0.75rem]">
                            11 Aug
                        </p>
                    </span>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default NavDropdown