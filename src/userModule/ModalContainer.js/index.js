import React from "react";
import { Modal } from "antd";

const ModalContainer = (props) => {
    const {currentRecord, isVisible} = props;
    return (
        <Modal
        title="User Info"
        visible={isVisible}
        onOk={() => props.setCurrentRecord(null)}
        onCancel={() => props.setCurrentRecord(null)}>
        {
            currentRecord && currentRecord.name && (
                <>
                <p>
        name: {currentRecord && currentRecord.name ? `${currentRecord.name.title} ${currentRecord.name.first} ${currentRecord.name.last}` : ""} 
    </p>
    <p>
        cell: {currentRecord.cell}
    </p>
    <p>
        age: {currentRecord.dob.age}
    </p>
    <p>
        gender: {currentRecord.gender}
    </p>
    <p>
        email: {currentRecord.email}
    </p>
    <p>
        phone: {currentRecord.phone}
    </p>
    <p>
        nat: {currentRecord.nat}
    </p>
    <p>
        city: {currentRecord.location.city}
    </p>
    <p>
        state: {currentRecord.location.state}
    </p>
    <p>
        coutry: {currentRecord.location.country}
    </p>
                </>
            )
        }
   
        </Modal>
        
    )
}

export default ModalContainer;