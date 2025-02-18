export interface Todo {
    id: number;
    label: string;
    isDone: boolean;

    createdAt: number;
    finishedAt?: number;
}
