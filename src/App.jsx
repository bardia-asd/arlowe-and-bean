import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { ShoppingBag } from "lucide-react";

const App = () => {
    return (
        <div className="min-h-screen bg-bg-primary">
            <main>
                <RouterProvider router={router} />
                <h1 class="text-3xl font-bold underline text-text-primary animate-fade-up">
                    Arlowe & Bean
                    <ShoppingBag />
                </h1>
            </main>
        </div>
    );
};

export default App;
