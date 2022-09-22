const arr = ['js', 'react', 'js', 'angular', 'angular', 'js']


const count = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let count = i;
        console.log('rząd: ' + count);
        
        for (let j = 0; j < arr.length - 1; j++) {
            console.log(arr[i][j]);          
        }
    }
}


console.log(count(arr));