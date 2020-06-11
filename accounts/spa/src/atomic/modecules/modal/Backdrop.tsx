import React from 'react';
import styled from 'styled-components';
import { BACKDROP } from '../../../config/zIndex';

type StyledDivProps = {
    show: boolean;
    visible?: boolean
    backgroundColor?: string;
};

const StyledDiv = styled.div<StyledDivProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => (props.show ? 'block' : 'none')};
    z-index: ${BACKDROP};
    background-color: ${props => props.visible ? (props.backgroundColor || '#c4c4c4') : 'none'};
    opacity: 0.7;
`;

type Props = {
    show: boolean;
    onClose: () => void;
    visible?: boolean
    color?: string;
};

const Backdrop: React.FC<Props> = ({show, onClose, visible, color}) => {
    return <StyledDiv show={show}
        onClick={onClose}
        visible={visible}
        backgroundColor={color}
    />;
};

export default Backdrop;
