/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  let sortedData;
  this.el = document.createElement('table');

  let initialHTML = `
<thead>
  <tr>
     <td>Name</td>
     <td>Age</td>
     <td>Salary</td>
     <td>City</td>
  </tr>
</thead>`;

  this.el.innerHTML = initialHTML;

  items.map((item) => {
    let tbody = document.createElement('tbody');
    tbody.innerHTML += `<tr>
   <td>${item.name}</td>
   <td>${item.age}</td>
   <td>${item.salary}</td>
   <td>${item.city}</td>
</tr>`;
    this.el.appendChild(tbody);
  });


  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    this.el.innerHTML = initialHTML;

    if (column === 0 && desc === false) {
      sortedData = items.sort((prev, next) => prev.name > next.name ? 1 : -1);
    }

    if (column === 0 && desc === true) {
      sortedData = items.sort((prev, next) => prev.name < next.name ? 1 : -1);
    }

    if (column === 3 && desc === false) {
      sortedData = items.sort((prev, next) => prev.city > next.city ? 1 : -1);
    }

    if (column === 3 && desc === true) {
      sortedData = items.sort((prev, next) => prev.city < next.city ? 1 : -1);
    }

    if (column === 2 && desc === false) {
      sortedData = items.sort((prev, next) => prev.salary - next.salary);
    }

    if (column === 2 && desc === true) {
      sortedData = items.sort((prev, next) => next.salary - prev.salary);
    }

    if (column === 1 && desc === false) {
      sortedData = items.sort((prev, next) => prev.age - next.age);
    }

    if (column === 1 && desc === true) {
      sortedData = items.sort((prev, next) => next.age - prev.age);
    }

    let tbody = document.createElement('tbody');

    sortedData.map((item) => {
      tbody.innerHTML += `
  <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
  </tr>`;
    });
    this.el.appendChild(tbody);
  };
}
