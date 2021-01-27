function randomExcuse()
{
    let quien = ['The dog','My granma','This turtle','That bird'];
    let accion = ['ate','peed','crushed','broke','burn'];
    let item = ['the book','my food','his car','my house', 'her phone'];
    let cuando = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let randomNumber1 = Math.floor(Math.random() * 5);
    let randomNumber2 = Math.floor(Math.random() * 5);
    let randomNumber3 = Math.floor(Math.random() * 5);
    let randomNumber4 = Math.floor(Math.random() * 5);

    let texto = `${quien[randomNumber1]} ${accion[randomNumber2]} ${item[randomNumber3]} ${cuando[randomNumber4]}`
    let parrafo = document.querySelector("#excuse")
    parrafo.innerHTML = texto
};
randomExcuse()