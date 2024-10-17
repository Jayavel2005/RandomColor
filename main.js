const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const color6 = document.getElementById("color6");


window.document.addEventListener("keydown",(event)=>{
    if(event.key == " "){
        const red1 = Math.floor(Math.random() * 256);
        const green1 = Math.floor(Math.random() * 256);
        const blue1 = Math.floor(Math.random() * 256);

        // document.getElementById("keyName").innerText = `R: ${r} G:${g} B:${b}`;
        color1.style.backgroundColor = `rgb(${red1},${green1},${blue1})`;
        color1.value = `rgb(${red1},${green1},${blue1})`;

        
        const red2 = Math.floor(Math.random() * 256);
        const green2 = Math.floor(Math.random() * 256);
        const blue2 = Math.floor(Math.random() * 256);

        color2.style.backgroundColor = `rgb(${red2},${green2},${blue2})`;
        color2.value = `rgb(${red2},${green2},${blue2})`;

        const red3 = Math.floor(Math.random() * 256);
        const green3 = Math.floor(Math.random() * 256);
        const blue3 = Math.floor(Math.random() * 256);

        color3.style.backgroundColor = `rgb(${red3},${green3},${blue3})`;
        color3.value = `rgb(${red3},${green3},${blue3})`;

        const red4 = Math.floor(Math.random() * 256);
        const green4 = Math.floor(Math.random() * 256);
        const blue4 = Math.floor(Math.random() * 256);

        color4.style.backgroundColor = `rgb(${red4},${green4},${blue4})`;
        color4.value = `rgb(${red4},${green4},${blue4})`;

        const red5 = Math.floor(Math.random() * 256);
        const green5 = Math.floor(Math.random() * 256);
        const blue5 = Math.floor(Math.random() * 256);

        color5.style.backgroundColor = `rgb(${red5},${green5},${blue5})`;
        color5.value = `rgb(${red5},${green5},${blue5})`;

        const red6 = Math.floor(Math.random() * 256);
        const green6 = Math.floor(Math.random() * 256);
        const blue6 = Math.floor(Math.random() * 256);

        color6.style.backgroundColor = `rgb(${red6},${green6},${blue6})`;
        color6.value = `rgb(${red6},${green6},${blue6})`;
    }
})

    

