const Media = (...a) =>{
    const soma =  a.reduce((acum,num)=>{
        return acum + num;
    },0);
    return soma/a.length;

}

const MediaPonderada = (...b) =>{
        const total = b.reduce((acum,num)=>{
            return acum + num.p * num.n
        },0)
        const totalPeso = b.reduce((acum,num)=>{
            return acum + num.p
        },0)
        return total/totalPeso
}
const mediana = (...c) => {
    
    const NovaLista = [...c]
    NovaLista.sort((a,b) => a-b)
    //this is to get the index of the middle, if the legth 6 the index´s are 3 and 4 of the middle
    let numMed1 = Math.floor(c.length/2)
    let numMed2 = numMed1 + 1
    //vai pegar os numeros do meio do array e guardar em uma lista
    if (c.length % 2 !== 0){
        console.log(`A mediana da lista é ${numMed1}`)
    }else{
        console.log(`A mediana dessa lista é ${(numMed1 + NumMed2)/2}`)
    }

}

const Moda = (...a) =>{
    const quantities = a.map((num)=>{
        return [
            num, numbers.filter(n)
        ]
    })

}
const media = func(2,6,3,7,4);
console.log(media);

const mediaPond = MediaPonderada({n:7,p:2},{n:9,p:5},{n:3,p:1})

console.log(mediaPond)