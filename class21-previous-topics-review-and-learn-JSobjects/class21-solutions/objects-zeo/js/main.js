//Create a stopwatch object that has four properties and three methods
let stopwatch = {} // object created with curlys, litereral notation

stopwatch.brand = 'Nike'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.size = 'shmmmedium'

stopwatch.start = function(){
    console.log('STARTTTINNNNGGGG')
}
stopwatch.stop = function(){
    console.log('STOPPPINNGGG')
}
stopwatch.sayBrand = function(){
    console.log( stopwatch.brand  )
}

============================================================================
/*//Create a stopwatch object that has four properties and three methods

let stopwatch = {}
stopwatch.color = 'red'
stopwatch.brand = 'Ap'
stopwatch.shape = 'square'
stopwatch.size = 'large'

stopwatch.start = function(){ console.log('STARTING')}
stopwatch.stop = function(){console.log('STOPING')}
stopwatch.sayBrand = function() {
    alert(stopwatch.brand)
}*/