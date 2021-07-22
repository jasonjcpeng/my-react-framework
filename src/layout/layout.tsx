import React, { useEffect } from "react";
import test from "@lib/demo/test";

const ele: React.FC = () => {
  useEffect(() => {
    console.log(ENV);
    console.log(test());
  }, []);

  return <a>test</a>;
};

export default ele;
