//Alice and Bob are watering plants. There are n plants in a row, and the ith plant is located at x = i. Each plant needs a specific amount of water. Alice and Bob have a watering can each, with a capacity of capacityA and capacityB respectively.
//They water the plants in the following way:
//Alice waters the plants from left to right, starting from the first plant (i = 0).
//Bob waters the plants from right to left, starting from the last plant (i = n - 1).
//If one of them does not have enough water to fully water the current plant, they refill their watering can at the river (which is located at x = -1 for Alice and x = n for Bob) before watering the plant.
var wateringPlants2 = function(plants, capacityA, capacityB) {

    let refills = 0;
    let left = 0;
    let right = plants.length - 1;
    let currentCapacityA = capacityA;
    let currentCapacityB = capacityB;

    while(left<right){
        //Alice's turn
       if(currentCapacityA<plants[left]){
            refills++;
            currentCapacityA = capacityA;
        }
        currentCapacityA -= plants[left];
        left++;
        //Bob's turn
        if(currentCapacityB<plants[right]){
            refills++;
            currentCapacityB = capacityB;
        }
        currentCapacityB -= plants[right];
        right--;
    }
    //If there is a middle plant left
    if(left===right){
        if(currentCapacityA>=currentCapacityB){
            if(currentCapacityA<plants[left]){
                refills++;
            }
        }
        else{
            if(currentCapacityB<plants[right]){
                refills++;
            }
        }
    }
    return refills;
}

// Example usage:
let plants2 = [5];
let capacityA = 10;
let capacityB = 8;
console.log(wateringPlants2(plants2, capacityA, capacityB));


//revision 1:
var wateringPlants2_1 = function(plants, capacityA, capacityB) {

    let refills=0;
    let left=0;
    let right=plants.length-1;
    let capA=capacityA;
    let capB=capacityB;
    while(left<right){
        if(capA<plants[left]){
            refills++;
            capA=capacityA;
        }
        capA-=plants[left];
        left++;

        if(capB<plants[right]){
            refills++;
            capB=capacityB;
        }
        capB-=plants[right];
        right--;
    }
    if(left===right){
        if(capA>=capB){
            if(capA<plants[left]){
                refills++;
            }
        }
        else{
            if(capB<plants[right]){
                refills++;
            }}
    }
    return refills;
}

// Example usage:
let plants21 = [5];
let capacityA1 = 10;
let capacityB1 = 8;
console.log(wateringPlants2_1(plants21, capacityA1, capacityB1));