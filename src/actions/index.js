export const addToCounter = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({ counter });
};
export const showPlantDetail = (store, id) => {
  const plantDetail = store.state.activePlants.filter(plant => {
    if (plant.key !== id) return true;
  });
  store.setState({ plantDetail });
};
export const setPlantsActive = (store, plant) => {
  const activePlants = [...store.state.activePlants, plant];
  store.setState({ activePlants });
};

  // const [children, setChilds] = useState([]);
  // const addCounter = () => {
  //   const counter = <Counter key={Date.now()} />;
  //   const newChildren = [...children, counter];
  //   setChilds(newChildren);
  // };
