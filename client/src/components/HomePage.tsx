import { Header } from "./Header";
import { List } from "./List";
import { Footer } from "./Footer";
import { useCreateTodo, useDeleteTodo, useTodos, useUpdateTodo } from "./queries/todo-queries";
import { ListItem } from "./ListItem";

export const HomePage = () => {
    const { data: todos } = useTodos();

    const { mutate: createTodo } = useCreateTodo();
    const { mutate: updateTodo } = useUpdateTodo();
    const { mutate: deleteTodo } = useDeleteTodo();

    return (
        <>
            <Header onItemAdd={createTodo}>To Do app</Header>
            <List>
                {todos?.map((todo) => (
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
