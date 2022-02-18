import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import sidebarStyles from "@/styles/Sidebar.module.css";
import { BsBagCheck } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sideNav}>
      <section className={sidebarStyles.logoBar}></section>
      <section className={sidebarStyles.logoAndBrandName}>
        <span className={sidebarStyles.fittoLogoHomeLink}>
          <Link href="/" passHref>
            <Image
              src="https://i.ibb.co/7tC01BY/fitto.png"
              alt="fitto-rounded-logo"
              className="fitto-rounded-logo"
              style={{ width: "70px", height: "70px" }}
            />
          </Link>
        </span>
        <span>fitto</span>
      </section>
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
            alt="icon"
            style={{ width: "35px", height: "35px", marginRight: "12px" }}
          />
        </Link>
        <Link href="/orders" passHref>
          <span>Orders</span>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
