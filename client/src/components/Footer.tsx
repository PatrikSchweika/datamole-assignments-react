import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    gap: 8px;

    margin-top: auto;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = ({ todoItems = 0, doneItems = 0 }: FooterProps) => {
    return (
        <FooterStyled>
            <div>Todo: {todoItems}</div>
            <div>Done: {doneItems}</div>
        </FooterStyled>
    );
};
