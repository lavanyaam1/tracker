import React, { useState } from "react";
import List from './List'
import NewList from "./NewList";
import Dropdown from "./DropDown";

export default function ListComponent() {
  const Dummy_Data = [
    { id:Math.floor(Math.random() * 100),title: "Intellectual", description: "Some random description for intellectual",hour:102 },
    { id:Math.floor(Math.random() * 100),title: "Physical", description: "Some random description for physical",hour:51 },
    { id:Math.floor(Math.random() * 100),title: "Creativity", description: "Some random description for creativity",hour:49 }
  ];

  const [list, setList] = useState(Dummy_Data);
  const [Range , setRange] = useState('all');

const saveListData = (newListData) => {
  newListData.id = Math.floor(Math.random() * 100);
    setList((prevList) => [newListData,...prevList]);
};

const filterListData = (range) => {
  setRange(range);
}
  return (
    <>
      <Dropdown onFilterListData={filterListData} />
      <List list={list} value={Range}/>
      <NewList onSaveListData={saveListData} />
    </>
  )
}
