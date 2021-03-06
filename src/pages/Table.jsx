import React from 'react';
import Table from 'react-bootstrap/Table'

const TableView = ({mockData}) => {
      
    const getKeys = () => {
        return Object.keys(mockData?.[0]);
    }
    
    const getHeader = () => {
        var keys = getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    
    const getRowsData = () => {
        var items = mockData;
        var keys = getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }
    return (
    <div className="table-view">
        { mockData && 
        <Table>
        <thead>
        <tr>{getHeader()}</tr>
        </thead>
        <tbody>
        {getRowsData()}
        </tbody>
        </Table>}
    </div>
    
    );
};


const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
      return <td key={props.data[key]}>{props.data[key]}</td>
    })
  }

export default TableView;