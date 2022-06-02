import Select from "react-select";
import makeAnimated from "react-select/animated";

const adminSelect = ({ allOptions, preSelected, onChangeHandler }) => {
  return (
    <Select
      options={allOptions}
      isMulti
      name="tagSelect"
      defaultValue={Array.isArray(preSelected) ? [...preSelected] : []}
      isSearchable
      placeholder="Select tags"
      onChange={(selected) => onChangeHandler(selected)}
      noOptionsMessage={() => "No tags found"}
      components={makeAnimated()}
      maxMenuHeight={150}
      className="text-sm"
    />
  );
};

export default adminSelect;
