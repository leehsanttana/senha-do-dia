
const btn = document.getElementById("btn")
const textInput = document.getElementById('senha');
const copyBtn = document.getElementById('copy');

btn.addEventListener("click", function() {
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1;
    var anoAtual = dataAtual.getFullYear().toString().substr(-2);
    formula = diaAtual * mesAtual * +anoAtual * 3;
    textInput.value = `${formula}`;
});

btn.addEventListener("click", function() {
    copyBtn.classList.add('show');
});


copyBtn.addEventListener('click', function(){
    textInput.select();
    document.execCommand('copy');
    copyBtn.innerHTML = "Copiado!";
});