import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  function xxx(){
    alert(`you clicked me!`);
  }
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <button onClick={xxx}>click me!</button>
      <input type="text" 
      placeholder="Enter food items here"
      onChange={(event) =>console.log(event.currentTarget.value)}
      />
    </div>
  );
}

export default App;