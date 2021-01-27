import React from "react";
import { Input } from "antd";

const SearchContainer = (props) => {
    const { filterValue, setFilterValue } = props;
    return (
        <div style={{marginTop: "20px", marginBottom: "10px"}}>
         <Input 
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            size="middle"
            allowClear
            placeholder="Search record by Name or Email"
            disabled={!props.allData || !props.allData.length}
            
        />

        </div>
       
    )
}

export default SearchContainer;