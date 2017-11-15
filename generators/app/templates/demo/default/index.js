import React from 'react';
import { render } from 'react-dom';

import <%= exportName %> from '<%= packageName %>'; // eslint-disable-line

render((
  <div className="demo">
    <<%= exportName %> />
  </div>
), document.getElementById('app'));
