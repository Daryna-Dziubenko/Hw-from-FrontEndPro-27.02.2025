/*Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно*/

function createPythagoreanTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement('tr');

        for (let j = 1; j <= 10; j++) {
            const td = document.createElement('td');
            td.textContent = i * j;
            td.style.border = '1px solid black';
            td.style.padding = '8px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.body.appendChild(table);
}
createPythagoreanTable();