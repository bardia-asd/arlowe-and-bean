import { Outlet } from "react-router";
import Header from "../Header";

const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
