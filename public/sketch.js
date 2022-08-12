let canvas;
let pokemonB = '"https://pokeapi.co/api/v2/pokemon/1/"},';
let bulbasaur = null;
let img;
let pokemon1 = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);

}

function draw() {
    //background(0, 50);
    background(0);


}

    async function poke1(){
        const URL =  'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
        const query = await fetch(URL);
        const data = await query.json();
        const {results} = data;
        console.log(data);
        console.log(results);
        console.log()
        
       
    
    
    
    }
        

function mouseClicked(){
    poke1();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}