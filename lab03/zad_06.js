const array = ['js', 'react', 'js', 'angular', 'angular', 'js']

const counter = (arr) =>{
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; i < arr.length; j++){
            if (arr[i] === arr[j]){
                count++;
            }
        }
    }
    console.log(`${arr[i]}: ${count}`)
}

counter(array)
//consola mi nei dziala nie moge sprawdzic oops