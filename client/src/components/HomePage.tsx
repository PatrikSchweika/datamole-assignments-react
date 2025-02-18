import { Header } from "./Header";
import { List } from "./List";
import { Footer } from "./Footer";
import { useCreateTodo, useDeleteTodo, useTodos, useUpdateTodo } from "./queries/todo-queries";
import { ListItem } from "./ListItem";
import { useMemo } from "react";
import { Todo } from "../models/todo";

const todoComparator = (a: Todo, b: Todo) => {
    if (a.isDone && !b.isDone) {
        return 1;
    }

    if (!a.isDone && b.isDone) {
        return -1;
    }

    return b.createdAt - a.createdAt;
};

export const HomePage = () => {
    const { data: todos } = useTodos();

    const sortedTodos = useMemo(() => {
        if (!todos) {
            return [];
        }

        return todos.toSorted(todoComparator);
    }, [todos]);

    const { mutate: createTodo } = useCreateTodo();
    const { mutate: updateTodo } = useUpdateTodo();
    const { mutate: deleteTodo } = useDeleteTodo();

    return (
        <>
            <Header onItemAdd={createTodo}>To Do app</Header>
            <List>
                {sortedTodos.map((todo) => (
                    <ListItem
                        label={todo.label}
                        isDone={todo.isDone}
                        key={todo.id}
                        onItemDelete={() => deleteTodo(todo.id)}
                        onItemLabelEdit={(label) => updateTodo({ id: todo.id, label })}
                        onItemDoneToggle={(isDone) => updateTodo({ id: todo.id, isDone })}
                    />
                ))}
            </List>
            <Footer />
        </>
    );
};
