import React from "react";
import Form from "react-bootstrap/Form";

const MockDataSelection = ({ setMockData, selectedMock }) => {
  const selectedRadio = (e) => {
    setMockData((data) => {
      return e.target.checked ? Number(e.target.id) : data;
    });
  };

  return (
    <Form>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Personnel Data"
            name="Personnel_Data"
            type={type}
            id={`1`}
            onClick={selectedRadio}
            checked={selectedMock === 1 ? true : false}
          />
          <Form.Check
            inline
            label="Company Data"
            name="Company_Data"
            type={type}
            id={`2`}
            onClick={selectedRadio}
            checked={selectedMock === 2 ? true : false}
          />
        </div>
      ))}
    </Form>
  );
};

export default MockDataSelection;
