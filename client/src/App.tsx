import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./components/HomePage";

const queryClient = new QueryClient();

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <Container>
                <Layout>
                    <HomePage />
                </Layout>
            </Container>
        </ThemeProvider>
    </QueryClientProvider>
);
