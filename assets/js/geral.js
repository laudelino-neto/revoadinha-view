$(document).ready(()=>{
    setTimeout(() => {$("#logar").css("display", "flex"); $("#introduction").css('display', "none")}, 2500);

    $("#btn-logar").on('click', () => {
        $.ajax({
            url: "http://10.10.221.66:8080/api/login/"+$("#cp-login").val()+":"+$("#cp-senha").val(),
        }).done(function( data ) {
            console.log(data);
            $("#teste").text(data.bairro);
        });
        window.location.href = "file:///C:/Users/DEV-02/Desktop/revoadinha-frontend/page/listaDeRevoadas.html"
    });
});


