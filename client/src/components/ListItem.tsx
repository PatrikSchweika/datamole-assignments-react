import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { Button } from "./Button";

const ButtonContainer = styled.div`
    visibility: hidden;
    display: flex;
    gap: 8px;
    flex-grow: 1;
    justify-content: flex-end;
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover ${ButtonContainer} {
        visibility: visible;
    }
`;

const Label = styled.label`
    margin-left: 5px;
`;

export type ListItemProps = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = ({ label, isDone, onItemDoneToggle, onItemDelete, onItemLabelEdit }: ListItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const handleShowFormToggle = useCallback(() => setShowForm((prev) => !prev), [setShowForm]);

    const handleSubmit = useCallback(
        (label: string) => {
            onItemLabelEdit(label);
            handleShowFormToggle();
        },
        [onItemLabelEdit, handleShowFormToggle]
    );

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>

            <ButtonContainer>
                <Button onClick={() => onItemDelete()}>
                    <TrashIcon />
                </Button>

                {showForm ? (
                    <Form initialValue={label} onCancel={handleShowFormToggle} onSubmit={handleSubmit} />
                ) : (
                    <Button onClick={handleShowFormToggle}>
                        <Pencil1Icon />
                    </Button>
                )}
            </ButtonContainer>
        </StyledDiv>
    );
};
