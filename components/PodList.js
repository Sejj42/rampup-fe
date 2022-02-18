import PodListItem from "./PodListItem";

const PodList = ({ pods }) => {
  return (
    <div>
      {pods.map((pod) => (
        <PodListItem key={pod.id} pod={pod} />
      ))}
    </div>
  );
};

export default PodList;
