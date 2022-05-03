import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
  return (
    <Fragment>
      <input type="text" placeholder={`Buscar ${props.searchType}`} />
      <AiOutlineSearch />
    </Fragment>
  );
};

export default SearchBar;
