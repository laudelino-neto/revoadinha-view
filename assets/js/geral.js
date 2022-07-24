$(document).ready(()=>{
    setTimeout(() => {$("#logar").css("display", "flex"); $("#introduction").css('display', "none")}, 2500);
    var srcImagemBanner;
    $("#btn-logar").on('click', () => {
        window.location.href = "file:./listaDeRevoadas.html"
    });
    
    $(".evento").on('click', () => {
        window.location.href = "file:./detalhesDoEvento.html";
    });
});


