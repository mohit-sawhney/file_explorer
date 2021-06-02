import React from 'react';
import styled from "styled-components";
import Icon from "react-icons-kit";
import { folder } from "react-icons-kit/feather/folder";
import { file } from "react-icons-kit/feather/file";

const Toolbar = styled.div`
  position: relative;
  display: flex;
  color: #d8e0f0;
  z-index: +1;
  /*border: 1px solid white;*/
  padding-bottom: 4px;
  i {
    margin-right: 5px;
    cursor: pointer;
  }
  i :hover {
    color: #d8e0f0;
  }
`;

const FloatLeft = styled.span`
  padding-left: 4px;
  width: 100%;
`;

class CustomToolbar extends React.Component{
    render() {
        let { isFolder, caption } = this.props
        return(
            <Toolbar>
                <FloatLeft>
                  <Icon icon={isFolder ? folder : file} />
                  {caption}
                </FloatLeft>
            </Toolbar>
        )
    }
}

export default CustomToolbar;