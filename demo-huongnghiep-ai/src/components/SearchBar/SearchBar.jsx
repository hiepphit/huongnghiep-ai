import "./styles.css";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";


function SearchBar() {
  return (
    <div className="search-bar">
      <div>
        <Search />
        <input type="text" placeholder="Tìm kiếm..." />
      </div>
    </div>
  );
}

export default SearchBar;
