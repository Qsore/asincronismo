const vacas = 5;
    const cuantasVacas = new Promise(function (resolve, reject) {
        if (vacas > 10) {
            resolve(`tengo ${vacas} vacas en la granja`);
        } else {
            reject("tengo pocas vacas en la granja");
        }
    });
    cuantasVacas.then((result)=> {
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=> console.log('finalizado'));