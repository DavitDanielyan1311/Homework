function makeTree(nodes) {
  const tree = {};
  let root = null;
  nodes.forEach((node) => {
    if (node.parentId === null) {
      root = node.id;
    }
  });
  function addToTree(parentId, tree1) {
    nodes.forEach((node) => {
      if (node.parentId === parentId) {
        tree1[node.id] = {};
        addToTree(node.id, tree1[node.id]);
      }
    });
  }
  addToTree(root, tree);
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

console.log(makeTree(nodes));
