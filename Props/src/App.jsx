import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

let foodItems=["dal","green vegitable","roti","salad","milk"];

  return (
    <>
      <h1 style={{color:"blue"}}>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
