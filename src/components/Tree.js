import React, { useState } from 'react'
import initialTree from '../data/tree'
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

const Tree = () => {
    const initialState = {
        tree: {
          ...initialTree
        },
        collapsed: false // start with unmodified tree
    };

    const [stateTree, setStateTree] = useState(initialState)


    const handleFolder = (node) => {
        let updateNode = node
        let updateTree = stateTree
        const hasKey = node.hasOwnProperty('collapsed')
        if (hasKey){
            delete updateNode['collapsed']
        }
        else{
            updateNode.collapsed = true
        }
        updateTree.tree.children[node] = updateNode
        setStateTree({...updateTree})
    }

    const checkChild = node => {
        const isFolder = node.hasOwnProperty("children");
        const { collapsed } = stateTree
        if (isFolder){
            return(
                <div>
                    {!collapsed && 
                        <div className={node.id!=='root-0'? 'child':''}>
                            <button className='btnCls' onClick={() => handleFolder(node)}>></button>
                            <Icon icon={folder} />
                            {node.module}
                            {node.hasOwnProperty('collapsed')? "":node.children.map(ele => checkChild(ele))}
                        </div>
                    }
                </div>
            )
        }
        else{
            return(
                <div style={{paddingLeft: '40px'}}>
                    <Icon icon={file} />
                    {node.module}
                </div>
            )
        }
    }
    return(
        <Toolbar>
            {checkChild(stateTree.tree)}
        </Toolbar>
    )
}

export default Tree;