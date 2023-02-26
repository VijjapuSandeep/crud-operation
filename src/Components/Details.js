import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddNew = () => {
    localStorage.setItem('addColor', '#7DEBE8'); localStorage.removeItem("detailColor"); localStorage.removeItem("listColor");
    navigate('/edit', { state: { status: 'addnew' } });
  }
  return (
    <div>
      <div>
        Color Name : {location.state.color}
      </div>
      <div>
        Color Pallete : {location.state.colorPallete}
      </div>
      <div>
        <button onClick={() => { localStorage.setItem('listColor', '#7DEBE8'); localStorage.removeItem("detailColor"); localStorage.removeItem("addColor"); }}><Link to='/'>Back To List</Link></button>
        <button onClick={handleAddNew}>Add New</button>
      </div>
    </div>
  )
}

export default Details
