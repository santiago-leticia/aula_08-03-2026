import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

// Isto é uma exceção a regra
const queryClient = new QueryClient();

export default function RootLayout() {
  // Aqui, é o meu componente React

  // Sempre retorna um template JSX
    useReactQueryDevTools(queryClient)
  
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}