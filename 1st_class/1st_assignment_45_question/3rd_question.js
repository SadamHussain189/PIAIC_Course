// // Store the person's name in a variable
// const person_name = "Sadam Hussain";

// // Convert the name to lowercase
// const nameLowercase = person_name.toLowerCase();

// // Convert the name to uppercase
// const nameUppercase = person_name.toUpperCase();

// // Convert the name to title case
// function toTitleCase(input): 
// {
//     return input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
// }

// const nameTitlecase = toTitleCase(person_name);

// // Print the name in different cases
// console.log(`Original Name: ${person_name}`);
// console.log(`Lowercase Name: ${nameLowercase}`);
// console.log(`Uppercase Name: ${nameUppercase}`);
// console.log(`Titlecase Name: ${nameTitlecase}`);














// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
// titleCase("I'm a little tea pot");









// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
//   }
// titleCase("I'm a little tea pot")











function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
titleCase("I'm a little tea pot");




