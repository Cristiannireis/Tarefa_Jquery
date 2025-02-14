$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtém o valor do input
        var taskText = $('#taskInput').val();

        // Adiciona a nova tarefa à lista
        $('#taskList').append('<li>' + taskText + '</li>');

        // Limpa o campo de entrada
        $('#taskInput').val('');
    });

    // Adiciona o efeito de riscar a tarefa ao clicar
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});