import  React from "react";
import TableContainer from "./TableContainer.js";
import SearchContainer from "./SearchContainer";
import ModalContainer from "./ModalContainer.js";
import AddUser from "./ModalContainer.js/AddUser";

const UserModule = (props) => {

    const {data, loading} = props;
    console.log("user data::", data);
    return (
    <React.Fragment>
       <SearchContainer {...props} />
       <TableContainer {...props} />
       <ModalContainer {...props} />
       {/* <AddUser {...props} /> */}
    </React.Fragment>
       
    )
}

export default UserModule;