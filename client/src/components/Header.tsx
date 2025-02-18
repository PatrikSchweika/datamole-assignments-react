import { PlusIcon } from "@radix-ui/react-icons";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { Button } from "./Button";

const StyledDiv = styled.header`
    display: flex;
    gap: 8px;
    padding: 16px 8px;
    align-items: center;

    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

const ActionContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-grow: 1;
    justify-content: flex-end;
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd } = props;

    const [showForm, setShowForm] = useState(false);

    const handleShowFormToggle = useCallback(() => setShowForm((prev) => !prev), [setShowForm]);

    const handleSubmit = useCallback(
        (label: string) => {
            onItemAdd(label);
            handleShowFormToggle();
        },
        [onItemAdd, handleShowFormToggle]
    );

    return (
        <StyledDiv>
            <h1>{children}</h1>
            <ActionContainer>
                {showForm ? (
                    <Form initialValue={""} onSubmit={handleSubmit} onCancel={handleShowFormToggle} />
                ) : (
                    <Button onClick={handleShowFormToggle}>
                        <PlusIcon />
                    </Button>
                )}
            </ActionContainer>
        </StyledDiv>
    );
};
