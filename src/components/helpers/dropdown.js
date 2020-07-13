import React, { useState, useEffect } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { getListSource } from "../../store/selectors/dropdown.selector";

const defaultOptions = [
  {
    value: "chocolate",
    label: "Chocolate",
  },
  {
    value: "strawberry",
    label: "Strawberry",
  },
  {
    value: "vanilla",
    label: "Vanilla",
  },
];

function Dropdown(props) {
  const { selectedOption, setSelectedOption, listSource, classNames, fetchData } = props;
  const [options, setOption] = useState(defaultOptions);

  useEffect(() => {
    getRemoteOption()
  },[])

  const getRemoteOption = () => {
    fetchData({page:1, pageSize: 25})
  }

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  console.count('counter')
console.log(listSource)
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={listSource}
      className={classNames}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
    />
  );
}

const mapStateToProps = () => {
  const getlist = getListSource();
  return (state, ownProps) => ({
    listSource: getlist(state, ownProps.modelName),
  });
};

export default connect(mapStateToProps)(Dropdown);
