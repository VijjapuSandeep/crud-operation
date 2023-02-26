import axios from 'axios';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Edit() {
    const location = useLocation();
    let data = {color:location.state.color,
                    colorPallete:location.state.colorPallete,
                    seq: location.state.seq
    }
    const onChangeColor=e=>{
        data.color=e.target.value;
    }
    const onChangeColorPallete=e=>{
        data.colorPallete=e.target.value;
    }
    const onChangeSeq=e=>{
        data.seq=e.target.value;
    }
    const handleEdit=(id)=>{
    localStorage.setItem('listColor','#7DEBE8');
    localStorage.removeItem("addColor");
    localStorage.removeItem("detailColor");
        axios.put(`http://localhost:3000/colorList/${id}`,data).then((r)=>{
                console.log(r.data);
        });
    }
    const handleAddNew=()=>{
        localStorage.setItem('listColor','#7DEBE8');
        localStorage.removeItem("addColor");
        localStorage.removeItem("detailColor");
        axios.post(`http://localhost:3000/colorList`,data).then((r)=>{
                console.log(r.data);
        });
    }
  return (
    <div>
        {location.state.status === 'edit'?
        <div>
        <h3>Edit Color</h3>
        <div>
          Color Name : 
          <input type="text" name="colorname"id="" defaultValue={location.state.color} onChange={onChangeColor} />
        </div>
        <div>
          Color Pallete : 
          <input type="text" name="colorpallete" id="" defaultValue={location.state.colorPallete} onChange={onChangeColorPallete} />
        </div>
        <div>
          Color Seq : 
          <input type="text" name="colorseq" id="" defaultValue={location.state.seq}  onChange={onChangeSeq}/>
        </div>
        <div>
          <button onClick={()=>{handleEdit(location.state.id)}}><Link to='/'>Submit</Link></button>
        </div> </div>
        : <div>
        <h3>Add New Color</h3>
        <div>
          Color Name : 
          <input type="text" name="colorname" id="" onChange={onChangeColor} />
        </div>
        <div>
          Color Pallete : 
          <input type="text" name="colorpallete" id="" onChange={onChangeColorPallete} />
        </div>
        <div>
          Color Seq : 
          <input type="text" name="colorseq" id="" onChange={onChangeSeq}/>
        </div>
        <div>
          <button type="submit" onClick={handleAddNew}><Link to='/'>Submit</Link></button>
        </div> </div>
    }
        

    </div>
  )
}

export default Edit
