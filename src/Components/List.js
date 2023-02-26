import React from 'react';
import axios from 'axios';
import '../App.css';
import {MdOutlineModeEdit,MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md";
import {RiDeleteBin6Line} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function List(props) {
    const navigate  = useNavigate();
    const [colorList, setColorList] = React.useState([]);
    const [sortedList, setSortedList] = React.useState([]);
    const [val, setVal] = React.useState(null);
// const colorList = [{id:1,color:'red',colorPallete:'#FF2D00',seq:3},
// {id:1,color:'blue',colorPallete:'#0055FF',seq:6},{id:1,color:'green',colorPallete:'#03C30F',seq:15}]
const loadData=()=>{
    
}
const handleOnClick =(val,val1)=>{
    localStorage.setItem('detailColor','#7DEBE8');
    localStorage.removeItem("addColor");
    localStorage.removeItem("listColor");
    console.log(val);
    console.log(val1);
navigate('/details', {state:{color:val,colorPallete:val1}});
}
const handleEdit= (color,colorPallete,seq,id) =>{
    localStorage.setItem('addColor','#7DEBE8');
    localStorage.removeItem("detailColor");
    localStorage.removeItem("listColor");
    navigate('/edit', {state:{color:color,colorPallete:colorPallete,seq:seq,status:'edit',id:id}});
}
const onDelete = (id)=>{
    console.log('deleting');
    axios.delete(`http://localhost:3000/colorList/${id}`).then(()=>{
        console.log('deleted');
    });
    setSortedList([]);
    setVal(Math.random());
}
const handleAsc=()=>{
    setSortedList(colorList.sort((a,b)=>{return a.seq - b.seq}));
    setVal(Math.random());
}
const handleDes=()=>{
    setSortedList(colorList.sort((a,b)=>{return b.seq - a.seq}));
    
    setVal(Math.random());
}
React.useEffect(()=>{
    axios.get('http://localhost:3000/colorList').then((r)=>{
        setColorList(r.data);
     });
 console.log(colorList);
},[val]);

  return (
    <div>
        <table>
        <tr>
          <th>Sr. No.</th>
          <th>Color</th>
          <th>Color Pallte</th>
          <th>Seq <MdOutlineKeyboardArrowUp onClick={handleAsc}/> <MdOutlineKeyboardArrowDown onClick={handleDes}/></th>
          <th>Action</th>
        </tr>
        { sortedList.length===0? colorList.map((val, key) => {
          return (
            <tr key={key}>
              <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}}>{val.id}</td>
              <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}}>{val.color}</td>
              <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}} style={{backgroundColor:val.colorPallete}}></td>
              <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}}>{val.seq}</td>
              <td><MdOutlineModeEdit onClick={()=>{handleEdit(val.color,val.colorPallete,val.seq,val.id)}} size='30px'/>
                <RiDeleteBin6Line onClick={()=>{onDelete(val.id)}} size='30px'/>
                </td>
            </tr>
          )
        }):
        sortedList.map((val, key) => {
            return (
              <tr key={key}>
                <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}}>{val.id}</td>
                <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}}>{val.color}</td>
                <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}} style={{backgroundColor:val.colorPallete}}></td>
                <td onClick={()=>{handleOnClick(val.color,val.colorPallete)}}>{val.seq}</td>
                <td><MdOutlineModeEdit onClick={()=>{handleEdit(val.color,val.colorPallete,val.seq,val.id)}} size='30px'/>
                  <RiDeleteBin6Line onClick={()=>{onDelete(val.id)}} size='30px'/>
                  </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default List
