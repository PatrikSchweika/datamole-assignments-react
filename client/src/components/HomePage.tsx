import { Header } from "./Header";
import { List } from "./List";
import { Footer } from "./Footer";
import { useTodos } from "./queries/todo-queries";
import { ListItem } from "./ListItem";

export const HomePage = () => {
    const { data: todos } = useTodos();

    return (
        <>
            <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
            <List>
                {todos?.map((todo) => (
                    <ListItem
                        label={todo.label}
                        isDone={todo.isDone}
                        key={todo.id}
                        onItemDelete={() => {}}
                        onItemLabelEdit={() => {}}
                        onItemDoneToggle={() => {}}
                    />
                ))}
            </List>
            <Footer />
        </>
    );
};
