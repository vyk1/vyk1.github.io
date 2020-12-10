const hoje = new Date()

let nascimento = "14/03/1999".split("/");
let dataNascimento = new Date(parseInt(nascimento[2], 10),
    parseInt(nascimento[1], 10) - 1,
    parseInt(nascimento[0], 10));

let diferenca = hoje.getTime() - dataNascimento.getTime();
let idade = new Date(diferenca);


document.getElementById('idade').innerHTML = Math.abs(idade.getUTCFullYear() - 1970)
document.getElementById('year').innerHTML = hoje.getFullYear()

if (hoje.getDate() === 14 && hoje.getMonth() + 1 === 03) {

    document.getElementById('isCakeDay').innerHTML = `
<div class="col-sm-4">
<strong class="text-uppercase" id="cake-day-title"></strong>
</div>
<div class="col-sm-8">
<span id="cake-day-text"></span>
<i class="ml-1 fa fa-birthday-cake"></i>
</div>
`
    document.getElementById('isCakeDay').className = "alert alert-info"

}