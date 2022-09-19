const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let marah=[];
let tidakMarah=[];
const promiseOutput = (emosi) => {
  return promiseTheaterIXX().then((array) => {
    for(var i=0; i<array.length; i++){
      if(array[i].hasil==='marah'){
        marah.push('marah');
        return marah.length;
      }
      if(array[i].hasil===' tidak marah'){
        tidakMarah.push('tidak marah')
        return tidakMarah.length;
      }
    }
  })
    return promiseTheaterVGC().then((array) => {
    for(var i=0; i<array.length; i++){
      if(array[i].hasil==='marah'){
        marah.push('marah');
        return marah.length;
      }
      if(array[i].hasil===' tidak marah'){
        tidakMarah.push('tidak marah')
        return tidakMarah.length;
      }
    }
  }) 
}
module.exports = {
  promiseOutput,
};
