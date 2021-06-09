import React from 'react';
import Header from './Header';
import MainPart from './MainPart';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div className="row ">
            <div className="col-md-3 m-0 p-0">
                <Sidebar/>
            </div>
            <div className="col-md-9 m-0 p-0 ">
                <Header/>
                <MainPart/>
            </div>
         </div>
    );
};

export default Home;