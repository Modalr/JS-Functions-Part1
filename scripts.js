let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
const instructors = [
  "Moudhi",
  "Mishary",
  "Fahad",
  "Anwar",
  "Salman",
  "Ayah",
  "Aziz",
];

let index = 0;

while (index < instructors.length) {
  console.log(instructors[index]);
  index++;
}

for (let i = 0; i < instructors.length; i++) {
  console.log(`this instructor is ${i + 1}. ${instructors[i]}`);
}
