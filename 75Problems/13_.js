class topKElements(nums,k){
  const map = new Map();
  for(let num of nums){
    map.set(num, (map.get(num) || 0) + 1);
  }
  let sorted = Array.from(map.entries()).sort((a,b)=> b[1] - a[1]);
  return sorted.slice(0,k).map(entry => entry[0])
}
