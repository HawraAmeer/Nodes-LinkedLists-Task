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
      // console.log(`${node.name} child of ${this.name}`);
    } else console.log(`child is an orphan`);
  };

  //   getChildWithName = (name) => {
  //     return this.children.find((child) => child.name === name);
  //   };

  // this was not there =)
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

// const root = new TreeNode("AlKandery");

let childName = prompt("enter child full name (done if finished):");
while (childName !== "done") {
  let child = new TreeNode(childName);
  let parent = root.traverseToFindParent(child);

  if (parent !== "parent does not exist") parent.addChild(child);
  else console.log(parent);

  childName = prompt("enter child full name (done if finished):");
}

// while (childName !== "done") {
//   let current = root;

//   let names = childName.split(" ").reverse();
//   let firstName = names.pop();
//   let lastName = names.shift();

//   if (lastName === current.name) {
//     if (names) {
//       for (let name of names) {
//         let child = current.getChildWithName(name);
//         if (child) {
//           current = child;
//         } else { // Bonus: creates the in betweens nodes
//           const newNode = new TreeNode(name);
//           current.addChild(newNode);
//           current = newNode;
//         }
//       }
//     }
//     const newNode = new TreeNode(firstName);
//     current.addChild(newNode);
//   }
//   console.log("--------------------------------------------------");
//   childName = prompt("enter child full name (done if finished):");
// }

root.traverse();
