import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const OuterDiv = styled.div`
    width: 100%;
    background-color: grey;
`;

const Header = () => {
    return (
        <OuterDiv>
            <Button
                variant='primary'
                type="button"
            >
                home
            </Button>
        </OuterDiv>
    );
};

export default Header;
