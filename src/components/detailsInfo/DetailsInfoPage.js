import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import CardDetailsInfo from './CardDetailsInfo';

const DetailsInfoPage = () => {
    return (
        <div className="row" >
        <div className="col-md-3 m-0 p-0" >
            <Sidebar />
        </div>
        <div className="col-md-9 m-0 p-0">
           <Header/>
           <CardDetailsInfo/>
           
        </div>

        
    </div>
    );
};

export default DetailsInfoPage;