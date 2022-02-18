import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import sidebarStyles from "@/styles/Sidebar.module.css";

const Sidebar = () => {
  const handleLogOutBtnClick = () => {
    console.log("Log Out button has been clicked");
  };

  return (
    <div className={sidebarStyles.sideNav}>
      <div className={sidebarStyles.bigDivTop}>
        <section className={sidebarStyles.logoBar}>
          <Link href="/" passHref>
            <Image
              src="/fitto_logo_bar.png"
              alt="fitto_logo_bar"
              style={{ width: "230px", height: "80px" }}
            />
          </Link>
        </section>
        <section className={sidebarStyles.logoAndBrandName}>
          <span className={sidebarStyles.fittoImgLogo}>
            <Image
              src="https://i.ibb.co/7tC01BY/fitto.png"
              alt="fitto-rounded-logo"
              className="fitto-rounded-logo"
              style={{ width: "70px", height: "70px" }}
            />
          </span>
          <span>fitto</span>
        </section>
        <section className={sidebarStyles.navItemSection}>
          <section className={sidebarStyles.navItem}>
            <Link href="/manage-pods" passHref>
              <Image
                src="pod_icon.png"
                alt="icon"
                style={{ width: "35px", height: "35px", marginRight: "12px" }}
              />
            </Link>
            <Link href="/manage-pods" passHref>
              <span>Manage Pods</span>
            </Link>
          </section>
          <section className={sidebarStyles.navItem}>
            <Link href="/orders" passHref>
              <Image
                src="bag_icon.png"
                alt="bag_icon"
                style={{ width: "35px", height: "35px", marginRight: "12px" }}
              />
            </Link>
            <Link href="/orders" passHref>
              <span>Orders</span>
            </Link>
          </section>
        </section>
      </div>
      <div className={sidebarStyles.logOutClause}>
        <div className={sidebarStyles.hr}></div>
        <div className={sidebarStyles.logOutIconAndBtn}>
          <Image
            src="logout_icon.png"
            alt="logout_icon"
            style={{ width: "35px", height: "35px", marginRight: "12px" }}
          />
          <button
            className={sidebarStyles.logOutBtn}
            onClick={handleLogOutBtnClick}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
