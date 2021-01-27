import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css'
import './App.css';
import UserModule from "./userModule";
export const UserContext = React.createContext();



function App() {

  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=5000")
    .then((res) => res.json())
    .then((data) => {
      setUserData(data.results);
      setLoading(false);
      setFilteredUserData(data.results);
    })
  }, [])

  useEffect(() => {
    console.log("record", currentRecord);
    if(currentRecord) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentRecord]);

  useEffect(() => {
    console.log("filteredvalue", filterValue);
    const filtereNewdData = userData.filter((obj) => obj.email.includes(filterValue) ||
                                                       obj.name.title.includes(filterValue) ||
                                                        obj.name.first.includes(filterValue) ||
                                                        obj.name.last.includes(filterValue));
    setFilteredUserData(filtereNewdData);
  }, [filterValue]);
  return (
       <div className="App">
         <UserModule 
          data={filteredUserData}
          allData={userData}
          loading={loading}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          setCurrentRecord={setCurrentRecord}
          currentRecord={currentRecord}
          isVisible={isVisible}

           />
      </div>
   
  );
}

export default App;
