// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./routes/AppRouters";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <AppRouter />
    //   <ReactQueryDevtools position="left" buttonPosition="bottom-right" />
    // </QueryClientProvider>
  );
}

export default App;
