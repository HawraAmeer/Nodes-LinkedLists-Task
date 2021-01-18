const prompt = require("prompt-sync")({ sigint: true });

const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }

  hash = (key) => {
    const encoded = new TextEncoder("utf-8").encode(key);
    return encoded.reduce((a, b) => {
      return a + b;
    }, 0);
  };

  // hash = (score) => {
  //   if (scroe >= 90) return "A";
  //   else if (scroe >= 80) return "B";
  //   else if (scroe >= 70) return "C";
  //   else if (scroe >= 60) return "D";
  //   else return "Other";
  // }

  compress = (hashCode) => hashCode % this.classSize;
  // no need for it.

  insert = (student) => {
    if (student.score >= 90 && this.classes.A.length < this.classSize)
      this.classes.A.push(student);
    else if (
      student.score < 90 &&
      student.score >= 80 &&
      this.classes.B.length < this.classSize
    )
      this.classes.B.push(student);
    else if (
      student.score < 80 &&
      student.score >= 70 &&
      this.classes.C.length < this.classSize
    )
      this.classes.C.push(student);
    else if (
      student.score < 70 &&
      student.score >= 60 &&
      this.classes.D.length < this.classSize
    )
      this.classes.D.push(student);
    else if (this.classes.Other.length < this.classSize)
      this.classes.Other.push(student);
    else console.log(`the class is full!`);
  };

  // insert = (name, score) => {
  //   const classroom = this.hash(score);
  //   if (this.classes[classroom].length < this.classSize) {
  //     this.classes[classroom].push({ name, score });
  //   } else console.log("The class is full");
  // };
}

const max = prompt("What is the maximum number of students in each class?");

const school = new HashTable(max);

students.forEach((student) => {
  school.insert(student);
});

console.log("Class A:");
console.log(school.classes.A);

console.log("Class B:");
console.log(school.classes.B);

console.log("Class C:");
console.log(school.classes.C);

console.log("Class D:");
console.log(school.classes.D);

console.log("Class Other:");
console.log(school.classes.Other);

// console.log(Object.keys(school.classes));
// console.log(Object.values(school.classes));
// console.log(Object.entries(school.classes));
// console.log(school.classes));
// console.table(school.classes));

// for (let element of Object.entries(school.classes)) {
//   console.log(`CLASSROOM ${element[0]}`);
//   console.table(element[1]);
// }
