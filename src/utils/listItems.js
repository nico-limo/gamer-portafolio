let technologies = [
  "Javascript",
  "React",
  "Redux",
  "Recoil Js",
  "Node Js",
  "MongoDB",
  "CSS",
  "HTML",
  "Firebase",
  "Solidity",
  "SQL",
];

let softSpn = [
  "Scrum",
  "Alegre",
  "Sociable",
  "Respetuoso",
  "Proactivo",
  "Entusiasta",
];
let softEng = [
  "Scrum",
  "Happy",
  "Sociable",
  "Respectful",
  "Proactive",
  "enthusiastic",
];


export const listTech = technologies.map((item, index) => (
  <li key={index}>{item}</li>
));

export const listSoftSpn = softSpn.map((item, index) => (
  <li key={index}>{item}</li>
));

export const listSoftEng = softEng.map((item, index) => (
  <li key={index}>{item}</li>
));



