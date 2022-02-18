const PodListItem = ({ pod }) => {
  return (
    <div>
      <h1>{pod.name}</h1>
      <h1>{pod.weightInG}</h1>
    </div>
  );
};

export default PodListItem;
