function makeTree2(nodes) {
  let tree = {
    id: null,
    children: [],
  };
  const root = nodes.find((node) => node.parentId === null);
  tree.id = root.id;
  function addToTree(parentId, children) {
    nodes.forEach((node) => {
      if (node.parentId === parentId) {
        const childNode = { id: node.id, children: [] };
        children.push(childNode);
        addToTree(node.id, childNode.children);
      }
    });
  }
  addToTree(root.id, tree.children);
  return tree;
}
let nodes = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 },
  { id: 7, parentId: 4 },
  { id: 8, parentId: 7 },
  { id: 9, parentId: 8 },
];
console.log(makeTree2(nodes));
