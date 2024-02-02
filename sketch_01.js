

function setup() {
    createCanvas(1000, 1000);

    const qiskit = require('qiskit');

    let t = 0;
    let p = 0;

}

function sph2cart(t, p){

    x = Math.sin(t) * Math.cos(p);
    y = Math.sin(t) * Math.sin(p);
    z = Math.cos(t);

    return x, y, z;

}

function draw() {

    for (let i = 0; i < 1; i=i+0.01) {

        for (let j = 1; j > 0; j = j+0.01) {

            qiskit.sim

        }

    }




}