import { Header } from "./Header";
import { List } from "./List";
import { Footer } from "./Footer";
import { useCompleteTodo, useCreateTodo, useDeleteTodo, useTodos, useUpdateTodo } from "./queries/todo-queries";
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

    const { sortedTodos, todoItems, doneItems } = useMemo(() => {
        if (!todos) {
            return { sortedTodos: [], doneItems: 0, todoItems: 0 };
        }

        const sortedTodos = todos.toSorted(todoComparator);
        const doneItems = todos.filter((todo) => todo.isDone).length;
        const todoItems = todos.length - doneItems;

        return { sortedTodos, doneItems, todoItems };
    }, [todos]);

    const { mutate: createTodo } = useCreateTodo();
    const { mutate: updateTodo } = useUpdateTodo();
    const { mutate: deleteTodo } = useDeleteTodo();
    const { mutate: completeTodo } = useCompleteTodo();

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
                        onItemDoneToggle={(isDone) => completeTodo(todo.id)}
                    />
                ))}
            </List>
            <Footer doneItems={doneItems} todoItems={todoItems} />
        </>
    );
};
