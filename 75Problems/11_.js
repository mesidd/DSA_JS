class Solution{
  groupAnagrams(strs){
    const map = new Map();
    for(let str of strs){
      let sorted = str.split('').sort().join();
      if(!map.has(sorted)){
        map.set(sorted,[]);
      }
      map.get(sorted).push(str);
    }
    return Array.from(map.values());
  }
}
