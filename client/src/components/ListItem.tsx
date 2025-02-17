import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    const [showForm, setShowForm] = useState(false);
    const handleShowFormToggle = useCallback(() => setShowForm((prev) => !prev), [setShowForm]);

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <button onClick={() => onItemDelete()}>
                <TrashIcon />
            </button>

            {showForm ? (
                <Form initialValue={label} onCancel={handleShowFormToggle} onSubmit={onItemLabelEdit} />
            ) : (
                <button onClick={handleShowFormToggle}>
                    <Pencil1Icon />
                </button>
            )}
        </StyledDiv>
    );
};
