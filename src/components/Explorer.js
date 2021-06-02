import React from "react";
import Tree from "react-ui-tree";
import initialTree from "../data/tree";
import styled from "styled-components";
import { ContextMenuTrigger } from "react-contextmenu";
import { StrollableContainer } from "react-stroller";
import CustomToolbar from "./CustomToolbar";
import "../styles/styles.css";
import "react-ui-tree/dist/react-ui-tree.css";
import "../styles/theme.css";
import "../styles/react-contextmenu.css";

const initialState = {
  active: null,
  tree: {
    ...initialTree
  },
  collapsed: false // start with unmodified tree
};

class Explorer extends React.Component {
  state = initialState;

  renderNode = node => {
    const renderComponent = (isFolder, caption) => (
      <CustomToolbar isFolder={isFolder} caption={caption}/>
    );

    const isFolder = node.hasOwnProperty("children");
    return (
      <ContextMenuTrigger
        id="FILE_CONTEXT_MENU"
        key={node.id}
        name={node.id}
        holdToDisplay={-1}
      >
        {renderComponent(isFolder, node.module)}
      </ContextMenuTrigger>
    );
  };

  render() {
    const { collapsed } = this.state;

    return (
        <div className="tree">
          {!collapsed && (
            <StrollableContainer draggable bar={LightScrollbar}>
              <Tree
                paddingLeft={20}
                tree={this.state.tree}
                onChange={this.handleChange}
                renderNode={this.renderNode}
              />
            </StrollableContainer>
          )}
        </div>
    );
  }

  handleChange = tree => {
    this.setState({
      tree: tree
    });
  };
}

const LightScrollbar = styled.div`
  width: 10px;
  background-color: #fff;
  opacity: 0.7;
  border-radius: 4px;
  margin: 4px;
`;

export default Explorer;
