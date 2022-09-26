/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { RiDashboardLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import menuList from '../../utils/meniList';
import {
    LeftPart,
    List,
    ListIcon,
    ListItem,
    ListNavigator,
    ListText,
    SideBarContainer,
    SideBarWrapper
} from './sideBarStyle';

const SideBar = ({ type = 'persistent', open = true }) => {
    const { palette } = useTheme();
    const [menu, setMenu] = useState(menuList);

    const handleMenuToggle = (index, status) => {
        const tempMenu = [...menu];

        tempMenu[index].isActive = !status;
        setMenu([...tempMenu]);
    };

    const handleSubMenuToggle = (menuIndex, subMenuIndex, status) => {
        const tempMenu = [...menu];

        const len = tempMenu.length;

        for (let i = 0; i < len; i += 1) {
            if (tempMenu && tempMenu[i].subMenuList && tempMenu[i].subMenuList.length > 0) {
                for (let j = 0; j < tempMenu[i].subMenuList.length; j += 1) {
                    if (menuIndex == i && subMenuIndex == j) {
                        tempMenu[i].subMenuList[j].isActive = !status;
                    } else {
                        tempMenu[i].subMenuList[j].isActive = false;
                    }
                }
            }
        }

        setMenu([...tempMenu]);
    };
    return (
        <SideBarWrapper open={open} type={(type, open)}>
            <SideBarContainer type={(type, open)}>
                <List className="sidebar-menu">
                    {menu.map((item, menuIndex) => (
                        <ListItem
                            key={`${item.label}_${menuIndex}`}
                            bgColor={palette.background}
                            color={palette.primary}
                            isActive={item.isActive}
                        >
                            <Link href="/form">
                                <ListNavigator
                                    onClick={() => handleMenuToggle(menuIndex, item.isActive)}
                                    bgColor={item.isActive ? palette.background : 'transparent'}
                                    color={palette.primary}
                                    isActive={item.isActive}
                                >
                                    <LeftPart>
                                        <ListIcon>
                                            <RiDashboardLine />
                                        </ListIcon>
                                        <ListText>{item.label}</ListText>
                                    </LeftPart>
                                    {item && item.subMenuList && item.subMenuList.length > 0 && (
                                        <ListIcon className={item.isActive ? 'active' : ''}>
                                            <BiChevronRight fontSize={25} color={palette.primary} />
                                        </ListIcon>
                                    )}
                                </ListNavigator>
                            </Link>
                            {item.isActive &&
                                item &&
                                item.subMenuList &&
                                item.subMenuList.length > 0 && (
                                    <List active>
                                        {item.subMenuList.map((subMenu, subMenuIndex) => (
                                            <ListItem
                                                key={`${subMenu.label}_${subMenuIndex}`}
                                                color={palette.primary}
                                            >
                                                <Link href="/form">
                                                    <ListText
                                                        onClick={() =>
                                                            handleSubMenuToggle(
                                                                menuIndex,
                                                                subMenuIndex,
                                                                subMenu.isActive
                                                            )
                                                        }
                                                        color={
                                                            subMenu.isActive
                                                                ? palette.secondary
                                                                : palette.primary
                                                        }
                                                    >
                                                        {subMenu.label}
                                                    </ListText>
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                        </ListItem>
                    ))}
                </List>
            </SideBarContainer>
        </SideBarWrapper>
    );
};

export default SideBar;
