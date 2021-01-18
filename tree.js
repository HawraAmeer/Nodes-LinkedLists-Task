const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`added a child to ${node.name.split(" ")[1]}`);
    } else console.log(`child is an orphan`);
  };

  traverseToFindParent = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      if (child.name.split(" ")[1] === current.name.split(" ")[0]) {
        return current;
      }
      nodes = [...nodes, ...current.children];
    }
    return "parent does not exist";
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

const root = new TreeNode("family");

let childName = prompt("enter child full name (done if finished):");
while (childName !== "done") {
  let child = new TreeNode(childName);
  let parent = root.traverseToFindParent(child);

  if (parent !== "parent does not exist") parent.addChild(child);
  else console.log(parent);

  childName = prompt("enter child full name (done if finished):");
}

root.traverse();
