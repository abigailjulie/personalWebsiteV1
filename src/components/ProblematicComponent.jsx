import React from "react";

const ProblematicComponent = () => {
  throw new Error("This is a test error!");
  return <div>This will not be rendered due to the error.</div>;
};

export default ProblematicComponent;