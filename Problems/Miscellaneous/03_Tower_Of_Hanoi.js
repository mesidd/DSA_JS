function towerOfHanoi(n, source, destination, auxiliary){
  if(n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  towerOfHanoi(n-1, source, auxiliary, destination);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n-1, auxiliary, destination, source);
}

console.log(3,'A','C','B')

// Steps : 2 ^ 3 - 1 = 7
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
