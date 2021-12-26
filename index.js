
let flecha=document.querySelectorAll(".flecha")
let dato=document.querySelectorAll(".datos")

// console.log(flecha)
// console.log(dato)
for(let i=0;i<flecha.length;i++){
    flecha[i].addEventListener("click",function(){
        // flecha[i].classList.toggle("flechaR")

        for(let x=0;x<dato.length;x++){
            if(i==x){
                dato[x].classList.toggle("ver_dato")
                // flecha[i].style.transform="rotate(0deg)"
                flecha[i].classList.toggle("flechaR")

            }else{
                dato[x].classList.remove("ver_dato")
                flecha[i].classList.toggle("flechaR")


            }
        }
    })
}