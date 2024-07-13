const toSort = [5, 4, 12, 18, 40, 31, 9, 20, 17];
let tsLen=toSort.length;

let rng1 = 0;
let rng2 = 0;



function isSorted(arrayW){
  for (let i=0; i<arrayW.length-2; i++){
    if (arrayW[i]>arrayW[i+1]){
      return false
    }
  }
  return true
}

function rngsort(){
  while (!isSorted(toSort)){
    rng1=Math.floor(Math.random()*tsLen);
    rng2=Math.floor(Math.random()*tsLen);

    if (rng1 < rng2){
      if (toSort[rng1] > toSort[rng2]){
        // below swaps
        let cached = toSort[rng1];
        toSort[rng1]=toSort[rng2];
        toSort[rng2]=cached;
      }
    }
    else if (rng2 < rng1){
      if (toSort[rng1] < toSort[rng2]){
        // below swaps
        let cached = toSort[rng1];
        toSort[rng1]=toSort[rng2];
        toSort[rng2]=cached;
      }
    }
  }
}

rngsort();

console.log(toSort);
console.log(process.memoryUsage());
