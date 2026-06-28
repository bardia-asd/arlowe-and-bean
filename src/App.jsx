import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

const App = () => {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
};

export default App;
