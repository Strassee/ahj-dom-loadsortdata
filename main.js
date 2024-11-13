/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/table.js
class Table {
  constructor(element, data) {
    this._element = element;
    this.headId = document.querySelector(".id");
    this.headTitle = document.querySelector(".title");
    this.headYear = document.querySelector(".year");
    this.headImdb = document.querySelector(".imdb");
    this.arrow = document.createElement("span");
    this.arrow.classList.add('arrow');
    this.data = data;
  }
  createTable() {
    for (let el of this.data) {
      let tr = document.createElement("tr");
      tr.classList.add('row');
      let tdId = document.createElement("td");
      let tdTitle = document.createElement("td");
      let tdYear = document.createElement("td");
      let tdImdb = document.createElement("td");
      tr.dataset.id = el.id;
      tdId.textContent = tr.dataset.id;
      tr.dataset.title = el.title;
      tdTitle.textContent = tr.dataset.title;
      tr.dataset.year = el.year;
      tdYear.textContent = `(${tr.dataset.year})`;
      tr.dataset.imdb = el.imdb.toFixed(2);
      tdImdb.textContent = `imdb: ${tr.dataset.imdb}`;
      ;
      tr.appendChild(tdId);
      tr.appendChild(tdTitle);
      tr.appendChild(tdYear);
      tr.appendChild(tdImdb);
      this._element.appendChild(tr);
    }
  }
  sortTable(order) {
    const rows = Array.from(document.querySelectorAll(".row"));
    switch (order) {
      case 1:
        rows.sort(function (a, b) {
          return a.dataset.id - b.dataset.id;
        });
        this.arrow.textContent = '\u2193';
        this.headId.appendChild(this.arrow);
        break;
      case 2:
        rows.sort(function (a, b) {
          return b.dataset.id - a.dataset.id;
        });
        this.arrow.textContent = '\u2191';
        this.headId.appendChild(this.arrow);
        break;
      case 3:
        rows.sort(function (a, b) {
          if (a.dataset.title > b.dataset.title) {
            return 1;
          }
          if (b.dataset.title > a.dataset.title) {
            return -1;
          }
          return 0;
        });
        this.arrow.textContent = '\u2193';
        this.headTitle.appendChild(this.arrow);
        break;
      case 4:
        rows.sort(function (a, b) {
          if (a.dataset.title > b.dataset.title) {
            return -1;
          }
          if (b.dataset.title > a.dataset.title) {
            return 1;
          }
          return 0;
        });
        this.arrow.textContent = '\u2191';
        this.headTitle.appendChild(this.arrow);
        break;
      case 5:
        rows.sort(function (a, b) {
          return a.dataset.year - b.dataset.year;
        });
        this.arrow.textContent = '\u2193';
        this.headYear.appendChild(this.arrow);
        break;
      case 6:
        rows.sort(function (a, b) {
          return b.dataset.year - a.dataset.year;
        });
        this.arrow.textContent = '\u2191';
        this.headYear.appendChild(this.arrow);
        break;
      case 7:
        rows.sort(function (a, b) {
          return a.dataset.imdb - b.dataset.imdb;
        });
        this.arrow.textContent = '\u2193';
        this.headImdb.appendChild(this.arrow);
        break;
      case 8:
        rows.sort(function (a, b) {
          return b.dataset.imdb - a.dataset.imdb;
        });
        this.arrow.textContent = '\u2191';
        this.headImdb.appendChild(this.arrow);
        break;
    }
    for (let sortRow of rows) {
      this._element.appendChild(sortRow);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const data = [{
  "id": 26,
  "title": "Побег из Шоушенка",
  "imdb": 9.30,
  "year": 1994
}, {
  "id": 25,
  "title": "Крёстный отец",
  "imdb": 9.20,
  "year": 1972
}, {
  "id": 27,
  "title": "Крёстный отец 2",
  "imdb": 9.00,
  "year": 1974
}, {
  "id": 1047,
  "title": "Тёмный рыцарь",
  "imdb": 9.00,
  "year": 2008
}, {
  "id": 223,
  "title": "Криминальное чтиво",
  "imdb": 8.90,
  "year": 1994
}];
function* indexMaker() {
  let index = 1;
  while (true) {
    if (index > 8) {
      index = 1;
    }
    yield index++;
  }
  ;
}
const i = indexMaker();
document.addEventListener("DOMContentLoaded", () => {
  const table = new Table(document.querySelector(".films"), data);
  window.table = table;
  table.createTable();
  setInterval(() => {
    table.sortTable(i.next().value);
  }, 2000);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;