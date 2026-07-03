import MenuItems from "./MenuItems";
import useFetch from "@/hooks/useFetch";

const MenuExplorer = () => {
    const { data, loading } = useFetch("menu_items");

    return (
        <>
            <div>
                <MenuItems items={data} loading={loading} />
            </div>
        </>
    );
};

export default MenuExplorer;
