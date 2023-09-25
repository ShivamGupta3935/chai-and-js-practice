const marvel_heroes = ["thar", "ironman", "superman"]
const superheroes = ["spiderman", "shaktiman", "kilvis"]

// const total_heroes = marvel_heroes.concat(superheroes
// console.log(total_heroes);

// marvel_heroes.push(superheroes)
// console.log(marvel_heroes);

// const all_hero = [...marvel_heroes, ...superheroes]
// console.log(all_hero);

const arry = [1, 3, [3, 7], 4, 0, [ 1, 9, 5], 5]
const real_another_arr = arry.flat(Infinity)
console.log(real_another_arr);

// console.log(Array.isArray(arry));
console.log(Array.isArray("arry"));
console.log(Array.from("arry"));
console.log(Array.from({name:"shivam"}));    ///interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));



