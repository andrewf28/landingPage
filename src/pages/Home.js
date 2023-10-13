import React, { useState } from 'react';
import { 
    Features2x2,
    CTASection,
    ClientCreateForm,
    CreatorCreateForm,
    ClientOrCreator2
} from '../ui-components';

import { SwitchField } from '@aws-amplify/ui-react';

export const DefaultSwitchFieldExample = () => {
  return <SwitchField label="This is a switch" />;
};

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  return (
    <div className="container">
        <CTASection/>
        <ClientOrCreator2/>
        <Features2x2 /> 
    </div>
  );
};

export default Home;
