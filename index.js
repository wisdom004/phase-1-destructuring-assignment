const farmAnimals = ['cow', 'horse', 'sheep', 'pig', 'chicken']

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings


// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals;

// 2. Use destructuring to declare the four traditional animal names.
const animalNames = ['cow', 'sheep', 'pig', 'bessie'];
const [blackAndWhite, black, pink, white ] = animalNames;
const [bessie, , dolly, babe, little] = farmAnimals;

// 3. Use destructuring to declare the three traditional animal colors (excluding 'little').
const animalColors = ['black and white', 'black', 'pink']
const [bw, bl, pk,] = animalColors;

// 4. Use destructuring to declare the seven traditional rainbow color variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log({ moo, neigh, baa, oink, cluck });
console.log({ blackAndWhite, black, pink, white });
console.log({ bw, bl, pk,});
console.log({ red, orange, yellow, green, blue, indigo, violet });

// 5. Use first letters as variables, leaving out indigo.
const [r, o, y, g, b, , v] = colors;

// 6. Assign only indigo using `indg`.
const [, , , , , indg] = colors;

// 7. Use destructuring to assign all variables using keys as variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log({ cow, sheep, pig, bessie });
console.log({ blackAndWhite, black, pink, white});
console.log({ red, orange, yellow, green, blue, violet });
console.log({ r, o, y, g, b, v });
console.log({ indg });
console.log({ muppetName, color, song, job, partner });
console.log({ song2, song4, nestedJob, nestedPartner });