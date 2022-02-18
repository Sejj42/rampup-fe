import Meta from "./Meta";
import Sidebar from "./Sidebar";
import layoutStyles from "@/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layoutDiv}>
      <Meta />
      <Sidebar />
      <div className={layoutStyles.currentPageDiv}>{children}</div>
    </div>
  );
};

export default Layout;
