document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('idade').value;

    // Criar nova linha para a tabela
    const table = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Inserir células e preencher com os valores do formulário
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = age;

    // cell1.classList.add('col1');
    // cell2.classList.add('col2');
    // cell3.classList.add('col3');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.classList.add('delete-btn');
    cell4.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        table.deleteRow(newRow.rowIndex - 1);
    });

    // Limpar o formulário
    document.getElementById('userForm').reset();
});
