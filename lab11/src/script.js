let i = 0;
let start = null;
const list = ["mama", "tata", "babcia", "brat", "siostra", "kuzyn", "kuzynka"];

const startCounter=()=>{
    start = setInterval(() => {
        const xd = list[Math.floor(Math.random() * list.length)];
        document.getElementById("counter").textContent = xd;
    }, 1000);
}

const stopCounter=()=>{
    clearInterval(start);
}

const clearCounter=()=>{
    i = 0;
}
