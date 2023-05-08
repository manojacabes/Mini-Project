import React, {Component}  from "react";
import "./../assets/style/Search.css";
import Searchbutton from "./../components/button/Searchbutton";

class Search extends Component {
    render(){
        return(<div className="LayoutSearch">
            <Searchbutton/>
        </div>)
    }
}

export default Search;