$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            cep:{
                required:true
            },
            endereco:{
                required:true
            },
        },
        submitHandler: function(form){
            alert('Formulário aceito!!')
            $('input').val('')
        },
        invalidHandler:function(evento, validador){
            let campoIncorretos = validador.numberOfInvalids();
            if(campoIncorretos){
                alert(`existem ${campoIncorretos} campos incorretos`)
            }
        }
    })

    $('form').on('submit', function(e){
        e.preventDefault();
    })
});