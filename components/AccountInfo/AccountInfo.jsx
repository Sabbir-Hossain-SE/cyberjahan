import Image from 'next/image';
import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import userImg from '../../public/user.png';
import {
    DownArrowIcon,
    DropDownLink,
    DropDownMenu,
    List,
    ListItem,
    UserName
} from './accountInfoStyle';

const AccountInfo = () => {
    return (
        <DropDownMenu>
            <DropDownLink href="#!">
                <Image src={userImg} width={60} height={60} />
                <UserName>Jhon Doe</UserName>
                <DownArrowIcon>
                    <AiOutlineCaretDown />
                </DownArrowIcon>
            </DropDownLink>
            <List className="nav-dropdown">
                <ListItem>
                    <a href="#!">Web Design</a>
                </ListItem>
                <ListItem>
                    <a href="#!">Web Development</a>
                </ListItem>
                <ListItem>
                    <a href="#!">Graphic Design</a>
                </ListItem>
            </List>
        </DropDownMenu>
    );
};

export default AccountInfo;
