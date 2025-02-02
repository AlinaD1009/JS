// Виконайте завдання №1 із задачника в рівні 9.1
// https://code.mu/ru/javascript/tasker/stager/9/10/

// Дана таблица. Юзер кликает по очереди на две ячейки, выделяя их. 
// Сделайте так, чтобы красным цветом выделились все ячейки, расположенные по порядку между теми, на которые кликнул юзер.

function generateTable(rows, cols, tableDOM){

    for (let tr = 1; tr <= rows; tr++){
        const newTr = document.createElement('tr');

        for (let td = 1; td <= cols; td++){
            const newTd = document.createElement('td');
            newTd.innerText = `${tr}.${td}`;
            newTd.dataset.row = tr;
            newTd.dataset.col = td;
            newTd.onclick = trackClick;
            newTr.appendChild(newTd);
        }

        tableDOM.appendChild(newTr);
    }  
}

let arrPoints = [];

function trackClick(event) {
    arrPoints.push(event.currentTarget);
    if (arrPoints.length === 2) {
        highlightCells(arrPoints[0], arrPoints[1]);
        arrPoints = [];
    }
}

function highlightCells(cell1, cell2) {
    clearSelection();
    const row1 = parseInt(cell1.dataset.row);
    const col1 = parseInt(cell1.dataset.col);
    const row2 = parseInt(cell2.dataset.row);
    const col2 = parseInt(cell2.dataset.col);

    const minRow = Math.min(row1, row2);
    const maxRow = Math.max(row1, row2);
    const minCol = Math.min(col1, col2);
    const maxCol = Math.max(col1, col2);

    document.querySelectorAll('td').forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        if (row >= minRow && row <= maxRow && col >= minCol && col <= maxCol) {
            cell.classList.add('highlight');
        }
    });
}

function clearSelection() {
    document.querySelectorAll('.highlight').forEach(cell => cell.classList.remove('highlight'));
}

const tableDOM = document.getElementById('tb');
generateTable(5, 6, tableDOM);


