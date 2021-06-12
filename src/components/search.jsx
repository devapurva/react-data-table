import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const SearchContainer = ({ setSearchInput, onSearch }) => {
  const setSearch = (e) => {
    // console.log(e.target.value)
    setSearchInput(e.target.value);
  };

  return (
    <InputGroup>
      <FormControl
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={setSearch}
      />
      <InputGroup.Append>
        <Button onClick={onSearch} variant="outline-secondary">
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchContainer;
