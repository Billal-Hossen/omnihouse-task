import React, { useState } from 'react';

import data from '../Data.json'
import Card from './Card';

const MainPart = () => {
    const [allData,setAllData]=useState(data)
    return (
        <div className="mb-5" style={{background:"#2D232B",height:542}}>
          <div class="container  h-100 d-flex justify-content-center rounded overflow-auto" >
              
                <div class="jumbotron my-auto p-3  text-white " style={{background:"#1C191D",width:700}}>
                    <h4>15 Search results</h4>
                   {
                     allData.map((data)=><Card key={data.id} data={data}/>)
                   }
                </div>
            </div>  
        </div>
    );
};

export default MainPart;