import React, {useEffect, useState } from 'react';
import './css/togo.css'

const TogoList = (props) => {
    const [togoSelected, setTogoSelected] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const {togos} = props

    useEffect(() => {
      
        if (localStorage.getItem("togosData")) {
          setTogoSelected(JSON.parse(localStorage.getItem("togosData")));
        }
      }, []);

    console.log(togoSelected)
    return ( 
        <div id="container">

            <div className="togo-details">
                <h2>title</h2>
                <p>date</p>
                <button className='btn'>Remove from Togo list</button>
            </div>
            <div className="togo-image">
                <img src={`https://artic-web.imgix.net/null82799ca2-66ed-4596-ab7e-283933a8be51/NPG_2018_16Obama_press.jpg?rect=0%2C377%2C2046%2C1151&auto=format&fm=jpg&q=1&fit=crop&crop=faces%2Cedges%2Centropy&w=750&h=422&blur=1200&sat=20`} alt="" />
            </div>
           
        </div>
     );
}
 
export default TogoList;