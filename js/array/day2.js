const marvel_heros =["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   // concad reaturn a new arr
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //spred mathed for this mathe use 3 dot and arr name
//console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const ral_another_Arr = anotherArr.flat(Infinity) // its concade all arr in one arry 
console.log(ral_another_Arr);


console.log(Array.isArray("Sitaram")); // give out put in boolean  is this arr or not 
console.log(Array.from("Sitaram")); // convert into array 
console.log(Array.of("deva"));

console.log(Array.from({name : "deva"})); // not convet directly  *********** out put mt aaray

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));








