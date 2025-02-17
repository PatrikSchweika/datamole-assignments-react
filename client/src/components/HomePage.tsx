import { Header } from "./Header";
import { List } from "./List";
import { Footer } from "./Footer";
import { useCreateTodo, useTodos, useUpdateTodoLabel } from "./queries/todo-queries";
import { ListItem } from "./ListItem";

export const HomePage = () => {
    const { data: todos } = useTodos();

    const { mutateAsync: createTodo } = useCreateTodo();
    const { mutateAsync: updateTodoLabel } = useUpdateTodoLabel();

    return (
        <>
            <Header onItemAdd={createTodo}>To Do app</Header>
            <List>
                {todos?.map((todo) => (
                    <ListItem
                        label={todo.label}
                        isDone={todo.isDone}
                        key={todo.id}
                        onItemDelete={() => {}}
                        onItemLabelEdit={(label) => updateTodoLabel({ id: todo.id, label })}
                        onItemDoneToggle={() => {}}
                    />
                ))}
            </List>
            <Footer />
        </>
    );
};
