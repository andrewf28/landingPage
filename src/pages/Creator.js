import React, { useState } from 'react';

import {
    CreatorInformation,
    CreatorCreateForm,
    KnowMore

   } from '../ui-components';
   
   

const Creator = () => {
  

  return (
    <div className="container">
        <CreatorInformation />
        
        <div className="form">
            <KnowMore/>
            <CreatorCreateForm/>
        </div>
        
        
    </div>
  );
};

export default Creator;
