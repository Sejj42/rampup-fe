import PageTitle from "@/components/PageTitle";
import PodList from "@/components/PodList";
import styles from "@/styles/ManagePodsPage.module.css";
import { API_URL } from "../config";

const ManagePodsPage = ({ pods }) => {
  console.log(pods);
  return (
    <>
      <div className={styles.container}>
        <PageTitle
          bigTitle="Manage Pods"
          subTitle="This page is used to manage the Pods in the fitto eco-system"
          btnTitle="+ Create Pod"
          btnType="createPod"
        />
        <PodList pods={pods} />
      </div>
    </>
  );
};

export default ManagePodsPage;

const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/pods`);
  const pods = await res.json();

  return {
    props: {
      pods,
    },
  };
};

export { getServerSideProps };
