import Image from 'next/image';
import React from 'react';
import { useTheme } from 'styled-components';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import InputField from '../../components/InputFiled/InputField';
import TextLabel from '../../components/TextLabel/TextLabel';
import brandImage from '../../public/brand.png';
import {
    Branding,
    CardWrapper,
    FlexBox,
    FormContainer,
    HeroWrapper,
    InputWrapper,
    Message,
    SubmittedStatus,
    TermsCondition,
    TitleText,
    TitleWrapper,
    Typography,
    VersionUpdatedDate
} from '../../styles/formStyle';

const Form = () => {
    const { palette } = useTheme();
    return (
        <FormContainer>
            <Branding>
                <Image src={brandImage} width={84} height={84} />
            </Branding>

            <HeroWrapper>
                <Card>
                    <TitleWrapper>
                        <TitleText color={palette.textSecondary}>
                            <Typography>Online Registration form for Test</Typography>
                        </TitleText>
                    </TitleWrapper>
                    <VersionUpdatedDate color={palette.textPrimary}>
                        <p>Last Version Made on :02/05/2022</p>
                        <p>Renewed with effect from :02/05/2023</p>
                    </VersionUpdatedDate>
                </Card>
            </HeroWrapper>

            <Card badgeText="Label">
                <FlexBox>
                    <TextLabel label="Name" value="Input any name here" />
                </FlexBox>
                <FlexBox>
                    <TextLabel
                        label="Address"
                        value="Flat no:1124, House no: 220, Road no: 140, Avenue: 50, Block: D, Sector: 04, Shahid Nazrul Islam Soroni 04, Shahid Nazrul Islam Soroni. Dhaka Bangladesh."
                    />
                </FlexBox>
                <FlexBox>
                    <TextLabel label="Area" value="Demo Text" />
                    <TextLabel label="District" value="Demo Text" />
                    <TextLabel label="Division" value="Demo Text" />
                </FlexBox>
            </Card>

            <Card>
                <FlexBox>
                    <TextLabel label="Registration No" value="28Bgt55" nowrap />
                    <TextLabel label="Registration signed on" value="10/10/2022" nowrap />
                    <TextLabel label="Registration will expire on" value="15/10/2022" nowrap />
                </FlexBox>
                <FlexBox>
                    <TextLabel label="Registration by" value="Demo Text" />
                </FlexBox>
                <FlexBox>
                    <TextLabel
                        label="Position"
                        value="Senior Marketing Manager, Information Technology."
                    />
                    <TextLabel label="Mobile No." value="+880 1234567891" nowrap />
                    <TextLabel label="E-mail" value="moshiur.rahman@test.com" nowrap />
                </FlexBox>
            </Card>

            <Card>
                <CardWrapper>
                    <FlexBox>
                        <Button
                            color="error"
                            title="Read Term & Conditions"
                            handleClick={() => alert('clicked!')}
                        />
                    </FlexBox>
                    <FlexBox direction="row">
                        <TermsCondition>
                            <InputWrapper>
                                <InputField type="checkbox" />
                            </InputWrapper>
                            <Message>
                                After having read and agreed to all the Terms & Conditions, I give
                                my approval to Cyber Jahan Ltd. to complete the registration.
                            </Message>
                        </TermsCondition>
                    </FlexBox>
                    <FlexBox direction="row">
                        <Button
                            color="success"
                            title="Approve"
                            handleClick={() => alert('clicked!')}
                        />
                        <Button
                            color="warning"
                            title="Change"
                            handleClick={() => alert('clicked!')}
                        />
                        <Button
                            color="primary"
                            title="Renew"
                            handleClick={() => alert('clicked!')}
                        />
                        <Button color="mute" title="Print" handleClick={() => alert('clicked!')} />
                    </FlexBox>
                </CardWrapper>
                <SubmittedStatus color={palette.textPrimary}>
                    This registration page successfully submitted on: 12/10/2021
                </SubmittedStatus>
            </Card>
        </FormContainer>
    );
};

export default Form;
