import Image from 'next/image';
import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { useTheme } from 'styled-components';
import userImg from '../../public/user.png';
import { DetailsContainer } from '../AccountDetails/accountDetailsStyle';
import { DropDownLink, DropDownMenu } from '../AccountInfo/accountInfoStyle';
import { MessageCount, MessageIcon, Messages } from '../Header/headerStyle';
import {
    ActionBar,
    LeftItemWrapper,
    MgDialog,
    MgList,
    MgListItem,
    MgListText,
    Name,
    RightItemWrapper,
    SeeMore,
    SeeMoreWrapper,
    Title,
    ViewAllButton
} from './messagesStyle';

const MessagesDropdown = () => {
    const { palette } = useTheme();
    return (
        <DropDownMenu>
            <DropDownLink href="#!">
                <Messages>
                    <MessageCount bgColor={palette.success}>6</MessageCount>
                    <MessageIcon>
                        <BiMessageDetail />
                    </MessageIcon>
                </Messages>
            </DropDownLink>
            <MgDialog className="nav-dropdown">
                <DetailsContainer>
                    <MgList>
                        <ActionBar>
                            <Title>You have 4 new message</Title>
                            <ViewAllButton>View all</ViewAllButton>
                        </ActionBar>
                        <MgListItem
                            borderColor={palette.borderPrimary}
                            color={palette.textSecondary}
                        >
                            <LeftItemWrapper>
                                <Image src={userImg} width={65} height={65} />
                            </LeftItemWrapper>
                            <RightItemWrapper>
                                <Name>MD. Any text</Name>
                                <MgListText>Lorem ipsum dolor sit amet, consectetur.</MgListText>
                                <MgListText>30 min. ago</MgListText>
                            </RightItemWrapper>
                        </MgListItem>
                        <MgListItem
                            borderColor={palette.borderPrimary}
                            color={palette.textSecondary}
                        >
                            <LeftItemWrapper>
                                <Image src={userImg} width={65} height={65} />
                            </LeftItemWrapper>
                            <RightItemWrapper>
                                <Name>MD. Any text</Name>
                                <MgListText>Lorem ipsum dolor sit amet, consectetur.</MgListText>
                                <MgListText>30 min. ago</MgListText>
                            </RightItemWrapper>
                        </MgListItem>
                        <MgListItem
                            borderColor={palette.borderPrimary}
                            color={palette.textSecondary}
                        >
                            <LeftItemWrapper>
                                <Image src={userImg} width={65} height={65} />
                            </LeftItemWrapper>
                            <RightItemWrapper>
                                <Name>MD. Any text</Name>
                                <MgListText>Lorem ipsum dolor sit amet, consectetur.</MgListText>
                                <MgListText>30 min. ago</MgListText>
                            </RightItemWrapper>
                        </MgListItem>
                        <MgListItem
                            borderColor={palette.borderPrimary}
                            color={palette.textSecondary}
                        >
                            <LeftItemWrapper>
                                <Image src={userImg} width={65} height={65} />
                            </LeftItemWrapper>
                            <RightItemWrapper>
                                <Name>MD. Any text</Name>
                                <MgListText>Lorem ipsum dolor sit amet, consectetur.</MgListText>
                                <MgListText>30 min. ago</MgListText>
                            </RightItemWrapper>
                        </MgListItem>
                        <SeeMoreWrapper>
                            <SeeMore>Show all message</SeeMore>
                        </SeeMoreWrapper>
                    </MgList>
                </DetailsContainer>
            </MgDialog>
        </DropDownMenu>
    );
};

export default MessagesDropdown;
