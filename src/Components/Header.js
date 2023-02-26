import React from 'react';
import '../App.css';

function Header() {
    const [a, setA]=React.useState();
    let data = {
        listColor:localStorage.getItem('listColor'),
        detailColor:localStorage.getItem('detailColor'),
        addColor:localStorage.getItem('addColor')
    }
    React.useEffect(()=>{
        setA(Math.random());
    },[a])
  return (
    <div className='header'>
      <div style={{backgroundColor:data.listColor}}>List</div>
      <div style={{backgroundColor:data.detailColor}}>Details</div>
      <div style={{backgroundColor:data.addColor}}>Add New/Edit</div>
    </div>
  )
}

export default Header
