let valores = [8 , 9 , 6 , 7, 2]
valores.push(4)

/* console.log(valores[0])
   console.log(valores[1])
   console.log(valores[2])
   console.log(valores[3])
   console.log(valores[4])
*/

for (let pos = 0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}