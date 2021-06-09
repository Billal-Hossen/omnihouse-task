import React from 'react';

import faker from 'faker'
import _ from 'lodash'

import { Dropdown } from 'semantic-ui-react'
import { Button } from 'react-bootstrap';

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

const Sidebar = () => {
    return (
        <div className="text-white p-3 " style={{background:"#201B20",minHeight:582}}>
            <h4>Find a rental property</h4>
            <div className="px-3 py-3" style={{borderRadius:7,background:"#0C0B0B"}}>
                <span style={{color:"#CA18AA"}}>Search area</span> <br />
                <small className="text-muted">eg. Oxford or NW3</small>

            </div>
            <div className="text-white py-2 d-flex  justify-content-between">
                <div className="px-3 sm-px-2 py-1" style={{borderRadius:7,background:"#0C0B0B"}}>
                <span style={{color:"#CA18AA"}}>Minimum beds</span> <br />
              
                <Dropdown text='No min'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='one' />
                    <Dropdown.Item text='two' />
                    <Dropdown.Item text='three' />
                
                    </Dropdown.Menu>
                </Dropdown>
                </div>

                <div className="px-3 py-2" style={{borderRadius:7,background:"#0C0B0B"}}>
                <span style={{color:"#CA18AA"}}>Maximum beds</span> <br />
               
                <Dropdown text='No min'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='one' />
                    <Dropdown.Item text='two' />
                    <Dropdown.Item text='three' />
                
                    </Dropdown.Menu>
                </Dropdown>
                </div>
               
            </div>
            
            <div className="px-3 py-2" style={{borderRadius:7,background:"#0C0B0B"}}>
                <span style={{color:"#CA18AA"}}>Price per</span> <br />
               
                <Dropdown text='Month'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='one' />
                    <Dropdown.Item text='two' />
                    <Dropdown.Item text='three' />
                
                    </Dropdown.Menu>
                </Dropdown>
                </div>

                <div className="text-white py-3 d-flex  justify-content-between">
                <div className="px-3 py-2" style={{borderRadius:7,background:"#0C0B0B"}}>
                <span style={{color:"#CA18AA"}}>Minimum Price</span> <br />
               
                <Dropdown text='No min'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='one' />
                    <Dropdown.Item text='two' />
                    <Dropdown.Item text='three' />
                
                    </Dropdown.Menu>
                </Dropdown>
                </div>

                <div className="px-3 py-2" style={{borderRadius:7,background:"#0C0B0B"}}>
                <span style={{color:"#CA18AA"}}>Maximum price</span> <br />
              
                <Dropdown text='No min'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='one' />
                    <Dropdown.Item text='two' />
                    <Dropdown.Item text='three' />
                
                    </Dropdown.Menu>
                </Dropdown>
                </div>
               
            </div>
            <div className="d-grid gap-2">
                <Button className=""  style={{background:"#D41553"}} size="lg">
                   <small> Block level button</small>
                </Button>
               
            </div>
        </div>
    );
};

export default Sidebar;