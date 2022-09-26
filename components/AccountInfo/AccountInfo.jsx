import Image from 'next/image';
import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import userImg from '../../public/user.png';
import AccountDetails from '../AccountDetails/AccountDetails';
import { Dialog, DownArrowIcon, DropDownLink, DropDownMenu, UserName } from './accountInfoStyle';

const AccountInfo = () => {
    const { palette } = useTheme();

    return (
        <DropDownMenu>
            <DropDownLink href="#!">
                <Image src={userImg} width={60} height={60} />
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
