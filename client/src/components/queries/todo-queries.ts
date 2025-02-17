import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../models/todo";
import { API_CLIENT } from "../../setup/api-client";

const TODOS_QUERY_KEY = "todos";

const fetchTodos = async () => {
    return API_CLIENT.get<Todo[]>("/items").then((res) => res.data);
};

const createTodo = async (label: string) => {
    const body = {
        label,
        isDone: false,
    };

    return API_CLIENT.post<Todo>("/items", body).then((res) => res.data);
};

interface UpdateTodoLabelData {
    id: number;
    label: string;
}

const updateTodoLabel = async ({ id, label }: UpdateTodoLabelData) => {
    return API_CLIENT.patch<Todo>(`/items/${id}`, { label }).then((res) => res.data);
};

export const useTodos = () => {
    return useQuery({
        queryKey: [TODOS_QUERY_KEY],
        queryFn: fetchTodos,
    });
};

export const useUpdateTodoLabel = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTodoLabel,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] }),
    });
};

export const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTodo,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] }),
    });
};
