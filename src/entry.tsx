import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout/layout";

const App: React.FC = () => {
  return <Layout />;
};

ReactDOM.render(<App />, document.getElementById("root"));
