const Test: React.FunctionComponent = () => {
  let root: TreeNode = { path: 'root', children: [] };

  return (
    <div>
      <button onClick={() => {
        onclick1(root);
        console.log(root);
      }}>Click1</button>
      <button onClick={() => {
        onclick2(root);
        console.log(root);
      }}>Click1</button>
    </div>
  )
}
const onclick1 = (node: TreeNode) => {
  modify(node);
}
const onclick2 = (node: TreeNode) => {
  modify(node.children[0]);
}
export default Test;
interface TreeNode {
  path: string;
  children: TreeNode[];
}

function modify(node: TreeNode) {
  node.children.push({ path: 'a', children: [] })
}