import React, { useState } from 'react';

import {
    ClientInformation,
    ClientCreateForm,
    KnowMore
   } from '../ui-components';
   
   

const Client = () => {
  

  return (
    <div className="container">
        <ClientInformation />

        <div className="form">
            <KnowMore/>
            <ClientCreateForm/>
        </div>
        
        
    </div>
  );
};

export default Client;
