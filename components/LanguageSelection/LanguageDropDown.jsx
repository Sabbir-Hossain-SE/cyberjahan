import React from 'react';
import { Option, SelectBox } from './languageDropDownStyle';

const LanguageDropDown = () => {
    return (
        <SelectBox name="language">
            <Option value="english">English</Option>
            <Option value="bengali">Bengali</Option>
            <Option value="french">French</Option>
        </SelectBox>
    );
};

export default LanguageDropDown;
