import React, { Fragment,useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function ManagerCalls() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Fragment>
    <div className="App">
      <Select
        isMulti={true}
        autoFocus={true}
        isSearchable={true}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder={"Category"}
        options={options}
      />
    </div>
    </Fragment>
  );


  }
  
  export default ManagerCalls;