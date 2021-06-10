import logo from './logo.svg';
import './App.css';
import TableView from "./pages/Table"
import mockDataOne from "./mockDataOne.json";
import mockDataTwo from "./mockDataTwo.json";

function App() {
  return (
    <div className="App">
      <TableView mockData={mockDataTwo}/>
    </div>
  );
}

export default App;
