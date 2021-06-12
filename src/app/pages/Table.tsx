import React, { useEffect, useState } from "react";
import TableContainer from "../components/tableContainer";
import SearchContainer from "../components/search";
import MockDataSelection from "../components/mockDataSelection";
import mockDataOne from "../../mockDataOne.json";
import mockDataTwo from "../../mockDataTwo.json";

const regex = /^["].*?["]$/;

const TableView = () => {
    const [selectedData, setSelectedData] = useState(1);
    const [searchInput, setSearchInput] = useState(null);
    const [mockData, setMockData] = useState(
        (MockDataOne = { ...mockDataOne })
    );

    useEffect(
        () => setMockData(selectedData === 1 ? mockDataOne : mockDataTwo),
        [selectedData]
    );

    const filterData = () => {
        const inputCheck = searchInput.match(regex);
        let data = selectedData === 1 ? mockDataOne : mockDataTwo;
        // console.log(data)
        if (inputCheck) {
            data = mockData?.filter(
                (el) =>
                    el?.location === searchInput.split('"').join("") ||
                    el?.name === searchInput.split('"').join("") ||
                    el?.company === searchInput.split('"').join("")
            );
            setMockData(data);
        } else {
            data = mockData?.filter(
                (el) =>
                    el?.name?.includes(searchInput) ||
                    el?.company?.includes(searchInput) ||
                    el?.location?.includes(searchInput)
            );
            setMockData(data);
        }
    };

    return (
        <div className="TableView">
            <MockDataSelection
                setMockData={setSelectedData}
                selectedMock={selectedData}
            />
            <SearchContainer
                setSearchInput={setSearchInput}
                onSearch={filterData}
            />
            {mockData && mockData.length > 0 ? (
                <TableContainer mockData={mockData} />
            ) : (
                "No Data Found"
            )}
        </div>
    );
};

export default TableView;
