// Template literals and Default Parameters 1-4 //

// function favMovie(movie) {
//     console.log(`My favorite movie is ${movie}.`);
// }

// favMovie ();



// Template literals and Default Parameters 5 //

// Default Parameter, but with my favorite movie passed in....
// function favMovie(movie='The Room') {
//     console.log(`My favorite movie is ${movie}.`);
// }

// favMovie ('Uptown Saturday Night');




// Template literals and Default Parameters 6-7 //

// Default Parameter
// function favMovie(movie='The Room') {
//     console.log(`My favorite movie is ${movie}.`);
// }

// favMovie ();



// Template literals and Default Parameters 8 //

// function favMovie(movie='The Room', name='world') {
//     console.log(`My favorite movie is ${movie}. and ${name} is my name.`);
// }

// favMovie ();



// Template literals and Default Parameters 9-11a //

// function favMovie(movie='The Room', name='world') {
//     console.log(`My favorite movie is ${movie}, and ${name} is my name.`);
// }

// favMovie ('Uptown Saturday Night', 'Tracy');



// Template literals and Default Parameters 11b //

// function favMovie(movie='The Room', name='world') {
//     console.log(`My favorite movie is ${movie}, and ${name} is my name.`);
// }

// favMovie ();



// Arrow Functions 1-4 //

// let favMovie = (movie = 'Uptown Saturday Night', name = 'Tracy') => {
//     console.log(`My favorite movie is ${movie}, and ${name} is my name.`);
// }

// favMovie();


// Arrow Functions 5-8 //

// let fullName = ['Tracy', 'Thomas'];

// let getFirstName = () => {
//     console.log(fullName[0]);
// }

// getFirstName();



// let fullName = ['Tracy', 'Thomas'];

// let getFirstName = () => console.log(fullName[0]);

// getFirstName();




// Arrow Functions 9-10 //

// let functotal = (x, y) => {

//     let producttotal = (x * y)
//     let expototal = (x ^ y)

//     console.log(`The product is ${producttotal}`)
//     console.log(`The exponential result is ${expototal}`)

// }

// functotal(8,2);



// Spread Syntax 1-4 //

// let socPartics = ['Tracy', 'Fairfield', 'Dressing'];

// let particulars = (name, location, favFood) => {
//     console.log(...socPartics)
// }

// particulars();

// Spread Syntax 5-8 //

let name = ['Tracy'];

function namesparam() {
    let passtring = 'McGillicuddy';
    name.push(passtring); 
    console.log(...passtring);
}

namesparam();
