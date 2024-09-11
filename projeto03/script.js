$(document).ready(function () {
    $("#consultar").click(function () {
        var cep = $("#cep").val();
        if (cep.length === 8) { 
            var url = "https://viacep.com.br/ws/" + cep + "/json/";
            $.getJSON(url, function (retorno) {
                $("#logradouro").val(retorno.logradouro);
                $("#bairro").val(retorno.bairro);
                $("#cidade").val(retorno.localidade);
                $("#uf").val(retorno.uf);
                $("#ibge").val(retorno.ibge);
            }).fail(function() {
                alert("Erro ao consultar o CEP. Verifique o CEP e tente novamente.");
            });
        } else {
            alert("Por favor, insira um CEP válido com 8 dígitos.");
        }
    });

    $("#limpar").click(function () {
        $("#cep").val("");
        $("#logradouro").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    });
});