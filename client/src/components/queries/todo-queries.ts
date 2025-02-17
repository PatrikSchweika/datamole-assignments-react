import { useQuery } from "@tanstack/react-query";
import { Todo } from "../../models/todo";
import { APP_CONFIG } from "../../setup/app-config";

const TODOS_QUERY_KEY = "todos";

const fetchTodos = async () => {
    return (await fetch(`${APP_CONFIG.apiUrl}/items`).then((res) => res.json())) as Todo[];
};

export const useTodos = () => {
    return useQuery({
        queryKey: [TODOS_QUERY_KEY],
        queryFn: fetchTodos,
    });
};
