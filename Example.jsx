import React from 'react';

const ReactDOMServer = require('react-dom/server');

const Example = () => {
  return <div>Example Page</div>;
};

export default ReactDOMServer.renderToString(<Example />);
