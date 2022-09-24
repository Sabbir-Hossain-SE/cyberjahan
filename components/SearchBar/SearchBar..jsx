import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Container, SearchIcon, SearchInputField } from './searchbarStyle';

const SearchBar = () => {
    return (
        <Container className="right-inner-addon input-container">
            <SearchIcon>
                <BsSearch fontSize={16} />
            </SearchIcon>
            <SearchInputField className="form-control" placeholder="Right icon" />
        </Container>
    );
};

export default SearchBar;
