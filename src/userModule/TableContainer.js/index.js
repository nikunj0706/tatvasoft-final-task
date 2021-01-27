import React from "react";
import {Table, Spin} from "antd";
import columns from "./coulmns";

const TableContainer = (props) => {
    const data = props.data;
    const pagination = {
        total :data.length,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        defaultPageSize:10,
        defaultCurrent:1
    }
    return (
        <Spin spinning={props.loading}>
            <Table 
            dataSource={data}
            columns={columns}
            pagination={pagination}
            onRow={(record, rowIndex) => {
    return {
      onClick: event => props.setCurrentRecord(record), 
    };
  }}
         />
            
        </Spin>
        

    )

}

export default TableContainer;