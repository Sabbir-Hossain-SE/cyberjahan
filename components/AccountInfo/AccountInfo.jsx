import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import userImg from '../../public/user.png';
import useWindowSize from '../../utils/useWindowSize';
import AccountDetails from '../AccountDetails/AccountDetails';
import { Dialog, DownArrowIcon, DropDownLink, DropDownMenu, UserName } from './accountInfoStyle';

const AccountInfo = () => {
    const { palette } = useTheme();
    const { screenWidth } = useWindowSize();
    const [isSmallDevice, setIsSmallDevice] = useState(true);

    useEffect(() => {
        if (screenWidth < 768) {
            setIsSmallDevice(true);
        } else {
            setIsSmallDevice(false);
        }
    }, [screenWidth]);

    return (
        <DropDownMenu>
            <DropDownLink href="#!">
                {!isSmallDevice && <Image src={userImg} width={60} height={60} />}
                <UserName color={palette.primary}>Jhon Doe</UserName>
                <DownArrowIcon>
                    <AiOutlineCaretDown />
                </DownArrowIcon>
            </DropDownLink>
            <Dialog className="nav-dropdown">
                <AccountDetails />
            </Dialog>
        </DropDownMenu>
    );
};

export default AccountInfo;
