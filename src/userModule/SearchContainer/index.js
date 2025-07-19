import React from "react";
import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";
import AddUser from "../ModalContainer.js/AddUser";

const SearchContainer = (props) => {
    const { filterValue, setFilterValue } = props;
    const [addModalVisible, setAddModalVisible] = useState(false);

    // Handler to show modal
   

    // Handler to show modal
    const showAddModal = () => setAddModalVisible(true);
    // Handler to hide modal
    const handleCancel = () => setAddModalVisible(false);

    // Handler to add user (pass up to parent if needed)
    const handleAddUser = (user) => {
        if (props.onAddUser) {
            props.onAddUser(user);
        }
        setAddModalVisible(false);
    };
    return (
        <div style={{marginTop: "20px", marginBottom: "10px", display: "flex", gap: "10px", alignItems: "center"}}>

         <Input 
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            size="middle"
            allowClear
            placeholder="Search record by Name or Email"
            disabled={!props.allData || !props.allData.length}
            style={{flex: 1}}
        />
         <Button type="primary" onClick={showAddModal}>Add User</Button>
                        <AddUser
                            visible={addModalVisible}
                            onCancel={handleCancel}
                            onAddUser={handleAddUser}
                        />

        </div>
       
    )
}

export default SearchContainer;