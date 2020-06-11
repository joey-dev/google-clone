import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

type StyledButtonProps = {
    block?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    width: ${props => props.block ? '100%' : 'unset'};
`;

type VariantTypes = 'primary' | 'secondary' | 'danger';
type Types = 'button' | 'submit' | 'reset';
type sizeTypes = 'small' | 'medium' | 'large';

type Props = {
    children: any;
    variant: VariantTypes;
    type: Types;
    outlined?: boolean;
    size?: sizeTypes;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({children, variant, outlined, type, size = 'medium', block, disabled, loading, onClick}) => {

    return (
        <StyledButton type={type}
            block={block}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
            {loading && (
                <Loader small />
            )}
        </StyledButton>
    );
};

export default Button;
