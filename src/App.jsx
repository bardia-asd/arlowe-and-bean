import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

const App = () => {
    return (
        <main>
            <RouterProvider router={router} />
            <h1 class="text-3xl font-bold underline text-fuchsia-800">Hello world!</h1>
        </main>
    );
};

export default App;
