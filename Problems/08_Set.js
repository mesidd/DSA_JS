const set = new Set([1,2,3,4])

set.add(5) // [1,2,3,4,5]

set.has(6) // false
set.has(4) // true

for ( const item of set ){
  console.log(item)
} // 1 2 3 4 5

set.delete(4)

console.log(set.size) // 4
