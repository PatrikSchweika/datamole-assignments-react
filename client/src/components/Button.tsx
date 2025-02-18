import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps<T> {
    children: ReactNode;
    type?: ButtonHTMLAttributes<T>["type"];
    onClick?: () => void;
    className?: string;
}

const StyledButton = styled.button`
    all: unset;
    width: 25px;
    height: 25px;

    text-align: center;

    background-color: ${(props) => props.theme.colors.grass9};
    border: 1px solid ${(props) => props.theme.colors.olive9};
    border-radius: 50%;
    color: #fff;

    &:hover {
        background-color: ${(props) => props.theme.colors.grass11};
    }
`;

export const Button = <T,>({ children, className, onClick, type }: ButtonProps<T>) => {
    return (
        <StyledButton className={className} onClick={() => onClick?.()} type={type}>
            {children}
        </StyledButton>
    );
};
