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

interface UpdateTodoData {
    id: number;
    label?: string;
    isDone?: boolean;
}

const deleteTodo = async (id: number) => {
    return API_CLIENT.delete(`/items/${id}`);
};

const updateTodo = async ({ id, ...body }: UpdateTodoData) => {
    return API_CLIENT.patch<Todo>(`/items/${id}`, { ...body }).then((res) => res.data);
};

export const useTodos = () => {
    return useQuery({
        queryKey: [TODOS_QUERY_KEY],
        queryFn: fetchTodos,
    });
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] }),
    });
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTodo,
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
