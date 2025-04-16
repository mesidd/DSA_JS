const map = new Map([['a',1],['b',2],['c',3]])
map.set('d',4)
map.size
map.has('v')
map.delete('a')
map.get('b')
for ( const [key,value] of map ){
  console.log( key, " => ", value )
}
map.clear()
