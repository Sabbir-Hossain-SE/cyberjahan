import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FiHelpCircle } from 'react-icons/fi';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import {
    AdList,
    AdListIcon,
    AdListItem,
    AdListText,
    Designation,
    DetailsContainer,
    Name,
    UserDetails
} from './accountDetailsStyle';

const AccountDetails = () => {
    const { palette } = useTheme();
    return (
        <DetailsContainer>
            <UserDetails>
                <Name color={palette.textSecondary}>MD Any name</Name>
                <Designation color={palette.textPrimary}>Senior Sales Executive</Designation>
            </UserDetails>
            <AdList>
                <AdListItem borderColor={palette.borderPrimary} color={palette.textSecondary}>
                    <AdListIcon>
                        <BiUserCircle fontSize={24} />
                    </AdListIcon>
                    <AdListText>My Profile</AdListText>
                </AdListItem>
                <AdListItem borderColor={palette.borderPrimary} color={palette.textSecondary}>
                    <AdListIcon>
                        <AiOutlineSetting fontSize={24} />
                    </AdListIcon>
                    <AdListText>Account Settings</AdListText>
                </AdListItem>
                <AdListItem borderColor={palette.borderPrimary} color={palette.textSecondary}>
                    <AdListIcon>
                        <FiHelpCircle fontSize={24} />
                    </AdListIcon>
                    <AdListText>Need Help ?</AdListText>
                </AdListItem>
                <AdListItem borderColor={palette.borderPrimary} color={palette.textSecondary}>
                    <AdListIcon>
                        <RiLogoutCircleRLine fontSize={24} />
                    </AdListIcon>
                    <AdListText>Sign Out</AdListText>
                </AdListItem>
            </AdList>
        </DetailsContainer>
    );
};

export default AccountDetails;
