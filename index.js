$( document ).ready(function() {
    const btnSalvar = document.getElementById("btnSalvar");
    const mensagemMotivacional = document.getElementById("mensagem"); 

    btnSalvar.addEventListener('click', event => {
        $.ajax({
            url: 'https://api.adviceslip.com/advice',
            method: 'GET',
            dataType: 'json',
            success: _data => {
                var response = _data;
                console.log(response.slip.advice);

                mensagemMotivacional.innerHTML = "";
                mensagemMotivacional.innerHTML = `
                <span id="mensagemMotivacional" title="Mensagem Motivacional">
                  ${response.slip.advice}
                </span>
              `;
            },
            error: _data => {
                alert("Erro ao tentar acessar a rota");
            }

        })
    })

});



