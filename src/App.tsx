import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import "./App.css";
import "./styles/main.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

/**
 * Data fetching using "Tanstack React Query"
 * 
 *  */ 
const queryClient = new QueryClient()

/**
 * The App component sets up the main application environment.
 * It provides a QueryClientProvider for handling server state
 * using react-query, a Router for managing navigation, 
 * and a Toaster for displaying notifications. 
 * Routes are rendered within the Router, and there is an optional 
 * ScrollArea for managing scroll behavior.
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* Toaster for notifications */}
        {/* Routes with conditional layouts */}
        {/* <ScrollArea className="w-full max-w-screen h-screen"> */}
        <Routes />
        {/* </ScrollArea> */}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
