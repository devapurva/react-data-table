import React, {useEffect, useState} from "react";
import TableView from "./pages/Table"
import SearchContainer from "./components/search";
import MockDataSelection from './components/mockDataSelection';
import mockDataOne from "./mockDataOne.json";
import mockDataTwo from "./mockDataTwo.json";
import './App.css';

const regex = /^["].*?["]$/;

const App = () => {

  const [selectedData, setSelectedData] = useState(1);
  const [searchInput, setSearchInput] = useState(null);
  const [mockData, setMockData] = useState(mockDataOne);

  useEffect(() => {
    setMockData(selectedData === 1 ? mockDataOne : mockDataTwo)
  },[selectedData])

  const filterData = () => {
    const inputCheck = searchInput.match(regex)
    let data = selectedData === 1 ? mockDataOne : mockDataTwo;
    // console.log(data)
    if(inputCheck){
      data = mockData?.filter(el => el?.location === searchInput.split('"').join('') || el?.name === searchInput.split('"').join('') || el?.company === searchInput.split('"').join(''))
      setMockData(data)
    } else {
      data = mockData?.filter(el => 
        el?.name?.includes(searchInput) ||
        el?.company?.includes(searchInput) ||
        el?.location?.includes(searchInput))
      setMockData(data)
    }
  }

  return (
    <div className="App">
      <MockDataSelection setMockData={setSelectedData} selectedMock={selectedData}/>
      <SearchContainer setSearchInput={setSearchInput} onSearch={filterData}/>
      {mockData && mockData.length > 0 ? <TableView mockData={mockData}/> : "No Data Found"}
    </div>
  );
}

export default App;
