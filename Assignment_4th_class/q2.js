"use strict";
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
// volume_of_cube = a * a *a
Object.defineProperty(exports, "__esModule", { value: true });
function cube(cube_side) {
    let cube_volume = cube_side * cube_side * cube_side;
    console.log(cube_volume);
}
cube(3);
