//Water plants
var wateringPlants = function(plants, capacity) {

    let steps = 0;
    let currentCapacity = capacity;

    for(let i=0; i<plants.length; i++){
        if(currentCapacity >= plants[i]){
            //Walk to the plant
            steps++;

            //Water the plant
            currentCapacity -= plants[i];

        }
        else{
            //Return to the river
            steps += i; //Steps to go back to river

            //Refill the watering can
            currentCapacity = capacity;

            //Walk to the plant again
            steps += i + 1; //Steps to go back to the plant

            //Water the plant
            currentCapacity -= plants[i];


            //generalize steps as : steps=2*i + 1
        }
    }
    return steps;
}
// Example usage:
let plants = [2,4,5,1,2];
let capacity = 6;
console.log(wateringPlants(plants, capacity)); 
// Output: 17

//Revision 1:
var wateringPlants1 = function(plants, capacity) {
    let steps = 0;
    let cap=capacity;
    for(let i=0;i<plants.length;i++){
        if(cap>=plants[i]){
            steps++;
            cap-=plants[i];
        }
        else{
            steps+=2*i+1;
            cap=capacity-plants[i];
        }
    }
    return steps;
}
// Example usage:
let plants1 = [2,4,5,1,2];
let capacity1 = 6;
console.log(wateringPlants1(plants1, capacity1)); 
// Output: 17