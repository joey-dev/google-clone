import React from 'react';
import styled from 'styled-components';
import { MODAL1 } from '../../../config/zIndex';
import Backdrop from './Backdrop';

const StyledCloseButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    margin: 5px;
    line-height: 8px;
`;

type ModalProps = {
    show: boolean;
    backgroundColor?: string;
    color?: string;
};

const ModalDiv = styled.div<ModalProps>`
    position: fixed;
    display: ${props => (props.show ? 'block' : 'none')};
    width: 60vw;
    height: 60vh;
    top: 20vh;
    left: 20vw;
    background-color: ${props => props.color || '#eeeeee'};
    z-index: ${MODAL1};
    padding: 20px;
`;

type Props = {
    onClose: () => void;
    show: boolean;
    backdrop?: boolean;
    backgroundColor?: string;
    color?: string;
};

const Modal: React.FC<Props> = ({show, onClose, children, backdrop, backgroundColor, color}) => {
    return (
        <React.Fragment>
            <Backdrop show={show}
                onClose={onClose}
                visible={backdrop}
                color={backgroundColor}
            />
            <ModalDiv show={show}>
                <StyledCloseButton
                    onClick={onClose}
                >
                    x
                </StyledCloseButton>
                {children}
            </ModalDiv>
        </React.Fragment>
    );
};

export default Modal;
