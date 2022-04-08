import React,{useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import {Button} from "@material-ui/core";
import { MdPeople} from "react-icons/md";

//DATE PICKER COMPONENT
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  //select the date range
  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }


  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]} onChange = {handleSelect}
      />
      Number of guests 
      <MdPeople/>
      <input min={0}
      defaultValue={2}
      type="number"/>
      <Button>Search Art</Button>
    </div>
  )
}

export default Search