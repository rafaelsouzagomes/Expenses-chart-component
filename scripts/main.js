async function loadChartData() {
    const response = await fetch("./data.json");
    const data = await response.json();

    data.forEach((item, index)=>{
        let itemDetail =  document.getElementsByClassName('itemDetail');
        itemDetail[index].innerHTML  = '$ '+item.amount;

        let chartInfo = document.getElementsByClassName('chart-info');
        chartInfo[index].innerHTML = item.day;
        
        let chartColumn = document.getElementsByClassName('chart-column');        
        chartColumn[index].style.height = (item.amount/5)+'10rem';
    })    
}

function setChartFocus() {
    var columns = document.getElementsByClassName('chart-item');

    Array.prototype.forEach.call(columns, function (column) {
        const details = column.querySelector('.itemDetail');
        column.addEventListener('mouseover', () => {
            details.classList.remove('hide');
        });

        column.addEventListener('mouseout', () => {
            details.classList.add('hide');
        });
    });
}

loadChartData();
setChartFocus();


