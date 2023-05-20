import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';

interface TreeNode {
  name: string;
  path: string;
  type: number;
  children?: TreeNode[];
}

interface Context {
  node: TreeNode;
  setView: Dispatch<SetStateAction<TreeNode>>;
  solve: () => void;
}

const MenuComp: React.FunctionComponent = () => {
  const [viewTree, setTree] = useState<TreeNode>({ name: '', path: '', type: 1 });

  const solve = () => {
    console.log('solve');
    console.log(viewTree);
    setTree(viewTree);
  }

  const url = '/api/query_folder_structure';
  const fetchFileTree = async () => {
    const formData = new FormData();
    formData.append('folder_path', '.');
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const result: TreeNode = await res.json();
    setTree(result);
  };
  useEffect(() => {
    fetchFileTree();
  }, [])


  return (
    <div className="menu">
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 'auto', flexGrow: 1, maxWidth: 'auto', overflowY: 'scroll' }}
      >
        {renderTree({ node: viewTree, setView: setTree, solve })}
      </TreeView>
    </div>
  )
}

const renderTree: React.FunctionComponent<Context> = ({ node, setView, solve }) => {
  let { name, path, type, children } = node;
  if (type === 1 && children) {
    return (
      <TreeItem key={name} nodeId={name} label={name} onClick={async () => { await onclick(node, setView); solve() }}>
        {children.map((child) => {
          return renderTree({ node: child, setView, solve });
        })}
      </TreeItem>
    );
  }
  return <TreeItem key={name} nodeId={name} label={name} onClick={async () => { await onclick(node, setView); solve() }} />
}


const onclick = async (node: TreeNode, setTree: Dispatch<SetStateAction<TreeNode>>) => {
  const url = '/api/query_folder_structure';
  const formData = new FormData();
  formData.append('folder_path', node.path);
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const result: TreeNode = await res.json();

  node.children = result.children;
  console.log('onclick');
  console.log(node);

  // if (addNode(node, path, result)) {
  //   setTree({ ...view });
  //   console.log(view);
  // }
}

const addNode = (node: TreeNode, path: string, newNode: TreeNode): boolean => {
  if (node.path === path) {
    (node.children ?? []).push(newNode);
    newNode.path = path + '/' + newNode.name;
    return true;
  }
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      if (addNode(node.children[i], path, newNode)) {
        return true;
      }
    }
  }
  return false;
};

export default MenuComp;
