import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"; // Ensure this path is correct now
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer>
            </Footer>
        </>
    );
};

export default Layout;
