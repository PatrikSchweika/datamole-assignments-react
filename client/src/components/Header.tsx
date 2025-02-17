import { PlusIcon } from "@radix-ui/react-icons";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Form } from "./form";

const StyledDiv = styled.header`
    display: flex;

    button {
        all: unset;

        width: 25px;
        height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd } = props;

    const [showForm, setShowForm] = useState(false);

    const handleShowFormToggle = useCallback(() => setShowForm((prev) => !prev), [setShowForm]);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {showForm ? (
                <Form initialValue={""} onSubmit={onItemAdd} onCancel={handleShowFormToggle} />
            ) : (
                <button onClick={handleShowFormToggle}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
