import React from "react";
import Tree from "./Tree";
import "../styles/styles.css";
import "../styles/theme.css";

class Explorer extends React.Component {

  render() {
    return (
        <div className="tree">
          <Tree />
        </div>
    );
  }
}

export default Explorer;
