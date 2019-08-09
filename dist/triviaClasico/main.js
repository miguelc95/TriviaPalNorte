(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cover/cover.component */ "./src/app/cover/cover.component.ts");





var routes = [
    { path: 'questions', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"] },
    { path: '',
        redirectTo: '/cover',
        pathMatch: 'full'
    },
    { path: 'cover', component: _cover_cover_component__WEBPACK_IMPORTED_MODULE_4__["CoverComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'triviaClasico';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cover/cover.component */ "./src/app/cover/cover.component.ts");
/* harmony import */ var _questions_rayados_questions_rayados_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions-rayados/questions-rayados.component */ "./src/app/questions-rayados/questions-rayados.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsComponent"],
                _cover_cover_component__WEBPACK_IMPORTED_MODULE_7__["CoverComponent"],
                _questions_rayados_questions_rayados_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsRayadosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_5__["CountdownModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cover/cover.component.css":
/*!*******************************************!*\
  !*** ./src/app/cover/cover.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmVyL2NvdmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cover/cover.component.html":
/*!********************************************!*\
  !*** ./src/app/cover/cover.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cover==true\" class=\"bg\">\n    <div class=\"row\" style=\"position: absolute; bottom: 10px; width: 100%\">\n        <div class=\"col-sm\">\n            <!-- <button type=\"button\" class=\"btn btn-primary\" style=\"margin-left:30%;\" (click)=\"jugar('rayados')\">Soy Rayado</button> -->\n          </div>\n        <div class=\"col-sm\">\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"margin-left:50%;\" (click)=\"jugar('tigres')\">Jugar</button>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"equipo=='tigres'\" class=\"bgQuestionsTigres\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <div style=\"text-align:center; margin-top: 50px\">\n          <h1 style=\"color: aliceblue\">{{counter | async}}</h1>\n        </div>\n      </div>\n      <div class=\"col-sm\">\n          <img src=\"/../../../assets/IconoTecate.png\" style=\"display: block; height: 400px; width: 400px; margin-right: 26%\">\n        </div>\n      <div class=\"col-sm\">\n        <div style=\"text-align:center; margin-top: 50px\">\n          <h6 style=\"display:inline-block;  color: aliceblue; margin-right: 10px\">Correctas {{puntosTigres}}</h6>\n          <h6 style=\"display:inline-block;  color: aliceblue\">-</h6>\n          <h6 style=\"display:inline-block;  color: aliceblue; margin-left: 10px\">{{puntosRayados}} Incorrectas</h6>\n        </div>\n      </div>\n    </div>\n    \n<div style=\"text-align: center; margin-top:30px\">\n  <div style=\"display: inline-block;\">\n    <div class=\"card\" style=\"width: 100%;\">\n      <div *ngIf=\"questions[equipo][paquete][cont] != undefined\" class=\"card-body\">\n        <h5 class=\"card-title\">{{questions[equipo][paquete][cont].q || \"\"}}</h5>\n        <div *ngFor=\"let answer of questions[equipo][paquete][cont].a; index as i;\">\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"width:100%; margin:5px\" (click)=\"selectAnswer(i)\">{{questions[equipo][paquete][cont].a[i] || \"\"}}</button>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<div *ngIf=\"equipo=='rayados'\" class=\"bgQuestionsRayados\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <div style=\"text-align:center; margin-top: 50px\">\n          <h1 style=\"color: aliceblue\">{{counter | async}}</h1>\n        </div>\n      </div>\n      <div class=\"col-sm\" style=\"text-align:center\">\n          <img src=\"/../../../assets/IconoTecate.png\" style=\"display: block; height: 400px; width: 400px; margin-right: 26%\">\n        </div>\n      <div class=\"col-sm\">\n        <div style=\"text-align:center; margin-top: 50px\">\n            <h1 style=\"display:inline-block;  color: aliceblue;\">{{puntosRayados}}</h1>\n            <img src=\"/../../../assets/LogoMty.png\" alt=\"\" style=\"display:inline-block; width: 100px; height: 150px;\">\n          <h1 style=\"display:inline-block;  color: aliceblue\">-</h1>\n          <img src=\"/../../../assets/logo-tigres.png\" alt=\"\" style=\"display:inline-block; width: 100px; height: 150px;\">\n          <h1 style=\"display:inline-block;  color: aliceblue;\">{{puntosTigres}}</h1>\n        </div>\n      </div>\n    </div>\n    \n<div style=\"text-align: center; margin-top:100px\">\n  <div style=\"display: inline-block;\">\n    <div class=\"card\" style=\"width: 100%;\">\n      <div *ngIf=\"questions[equipo][paquete][cont] != undefined\" class=\"card-body\">\n        <h5 class=\"card-title\">{{questions[equipo][paquete][cont].q || \"\"}}</h5>\n        <div *ngFor=\"let answer of questions[equipo][paquete][cont].a; index as i;\">\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"width:100%; margin:5px\" (click)=\"selectAnswer(i)\">{{questions[equipo][paquete][cont].a[i] || \"\"}}</button>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<div *ngIf=\"resultado==true\" class=\"bgQuestionsResultado\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n      </div>\n      <div class=\"col-sm\" style=\"text-align:center\">\n        <img src=\"/../../../assets/IconoTecate.png\" style=\"display: block; height: 400px; width: 400px; margin-right: 14%\">\n\n        <div style=\"text-align:center; margin-top:10%\">\n         <h1 style=\"color:aliceblue\">¡Resultado!</h1>\n          <h6 style=\"display:inline-block;  color: aliceblue;\">Correctas {{puntosTigres}}</h6>\n          <h6 style=\"display:inline-block;  color: aliceblue\">-</h6>\n          <h6 style=\"display:inline-block;  color: aliceblue;\">{{puntosRayados}} Incorrectas</h6>\n          <br>\n          <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top:20%\" (click)=\"reiniciar()\">Volver a empezar</button>\n        </div>        </div>\n      <div class=\"col-sm\">\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cover/cover.component.ts":
/*!******************************************!*\
  !*** ./src/app/cover/cover.component.ts ***!
  \******************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CoverComponent = /** @class */ (function () {
    function CoverComponent(router) {
        this.router = router;
        this.cover = true;
        this.equipo = '';
        this.resultado = false;
        this.cont = 0;
        this.paquete = 0;
        this.count = 60;
        this.puntosTigres = 0;
        this.puntosRayados = 0;
        this.questions = {
            tigres: [[{
                        q: "¿ En que año fue la primera edición del festival Tecate pa´l norte?",
                        a: ["2012", "2011", "2014"],
                        r: "2012"
                    },
                    {
                        q: "¿ Donde se lleva a cabo el festival Tecate Pa´l norte?",
                        a: ["Parque Fundidora", "Parque niños héroes", "Parque Diego Rivera"],
                        r: "Parque Fundidora"
                    },
                    {
                        q: "¿ Cual es el nombre oficial del festival??",
                        a: [" Tecate Pa’l Norte ", " Pa’l Norte Festival ", " Pa’l norte "],
                        r: " Tecate Pa’l Norte "
                    }, {
                        q: "¿ Como se llama el escenario de música electrónica?",
                        a: [" Club Social ", " Tecate Electrónico ", " pa’l baile "],
                        r: "Club Social"
                    }, {
                        q: "¿ Quienes fueron los headliners de la edición 2018?",
                        a: [" Muse y Queens of the Stone Edge ", " Queens of the Stone Edge y el Gran Silencio ", " Panteon rococó y Muse "],
                        r: " Muse y Queens of the Stone Edge"
                    }],
                [{
                        q: "¿ Cual es el nombre oficial del festival??",
                        a: [" Tecate Pa’l Norte ", " Pa’l Norte Festival ", " Pa’l norte "],
                        r: " Tecate Pa’l Norte "
                    },
                    {
                        q: "¿ Que famoso bar de la localidad se unio al festival proponiendo bandas de música       norteña?",
                        a: [" Pilo’s Bar ", " Bar pa’l norte ", " Tecate Bar"],
                        r: " Pilo’s Bar "
                    },
                    {
                        q: "¿ Cual es la Marca de cerveza patrocinadora del Festival?",
                        a: [" Tecate ", " Amstel Ultra ", " Heineken "],
                        r: " Tecate "
                    }, {
                        q: "¿ Cual es el Slogan del festival Tecate Pa’l norte?",
                        a: [" Poderoso y Ascendente ", " Siempre Poderoso ", " El mas grande y poderoso "],
                        r: " Poderoso y Ascendente "
                    }, {
                        q: "¿ Quienes son los hedliners de la edición 2019 de Tecate Pa’l Norte?",
                        a: [" Artic Monkeys y Kings of Leon ", " Zoe y Muse ", " The Killers y Mana "],
                        r: " Artic Monkeys y Kings of Leon "
                    }],
                [{
                        q: "¿ Cual es el Slogan del festival Tecate Pa’l norte?",
                        a: [" Poderoso y Ascendente ", " Siempre Poderoso ", " El mas grande y poderoso "],
                        r: " Poderoso y Ascendente "
                    },
                    {
                        q: "¿ Cual es el nombre oficial del festival??",
                        a: [" Tecate Pa’l Norte ", " Pa’l Norte Festival ", " Pa’l norte "],
                        r: " Tecate Pa’l Norte "
                    },
                    {
                        q: "¿ En que año fue la primera edición del festival Tecate pa´l norte?",
                        a: ["2012", "2011", "2014"],
                        r: "2012"
                    }, {
                        q: "¿ Donde se lleva a cabo el festival Tecate Pa´l norte?",
                        a: ["Parque Fundidora", "Parque niños héroes", "Parque Diego Rivera"],
                        r: "Parque Fundidora"
                    }, {
                        q: "¿ Con cual animal se representa el festival Tecate Pa’l Norte?",
                        a: [" León ", " Tigre ", " Águila "],
                        r: " León "
                    }],
                [{
                        q: "¿ Cual es el nombre oficial del festival??",
                        a: [" Tecate Pa’l Norte ", " Pa’l Norte Festival ", " Pa’l norte "],
                        r: " Tecate Pa’l Norte "
                    },
                    {
                        q: "¿ Cual es la Marca de cerveza patrocinadora del Festival?",
                        a: [" Tecate ", " Amstel Ultra ", " Heineken "],
                        r: " Tecate "
                    },
                    {
                        q: "¿ Como se llama el escenario de música electrónica?",
                        a: [" Club Social ", " Tecate Electrónico ", " pa’l baile "],
                        r: "Club Social"
                    }, {
                        q: "¿ Quienes fueron los headliners de la edición 2018?",
                        a: [" Muse y Queens of the Stone Edge ", " Queens of the Stone Edge y el Gran Silencio ", " Panteon rococó y Muse "],
                        r: " Muse y Queens of the Stone Edge"
                    }, {
                        q: "¿ Cual es el Slogan del festival Tecate Pa’l norte?",
                        a: [" Poderoso y Ascendente ", " Siempre Poderoso ", " El mas grande y poderoso "],
                        r: " Poderoso y Ascendente "
                    }],
                [{
                        q: "¿ Entre que estaciones del metro esta el parque fundidora?",
                        a: [" Parque fundidora e “y” griega ", " Felix U Gomez y Palacio Municipal ", " Palacio Federal e “Y” griega "],
                        r: " Parque fundidora e “y” griega "
                    },
                    {
                        q: "¿ Que famoso bar de la localidad se unio al festival proponiendo bandas de música       norteña?",
                        a: [" Pilo’s Bar ", " Bar pa’l norte ", " Tecate Bar"],
                        r: " Pilo’s Bar "
                    },
                    {
                        q: "¿ Cual es la Marca de cerveza patrocinadora del Festival?",
                        a: [" Tecate ", " Amstel Ultra ", " Heineken "],
                        r: " Tecate "
                    }, {
                        q: "¿ Cual es el Slogan del festival Tecate Pa’l norte?",
                        a: [" Poderoso y Ascendente ", " Siempre Poderoso ", " El mas grande y poderoso "],
                        r: " Poderoso y Ascendente "
                    }, {
                        q: "¿ En que año fue la primera edición del festival Tecate pa´l norte?",
                        a: ["2012", "2011", "2014"],
                        r: "2012"
                    }]], rayados: [[{
                        q: "¿ANOTADOR DEL PRIMER GOL EN CLASICOS?",
                        a: ["AGUSTIN “CHAIRAS” PRIETO", "SERGIO LIRA", "FRANCISCO ROMERO"],
                        r: "AGUSTIN “CHAIRAS” PRIETO"
                    },
                    {
                        q: "¿AÑO DE FUNDIACION DEL CLUB DE FUTBOL MONTERREY?",
                        a: ["1945", "1946", "1960"],
                        r: "1945"
                    },
                    {
                        q: "¿NOMBRE DEL MAXIMO ANOTADOR EN CLASICOS?",
                        a: ["BAHIA", "EDUARDO TATO NORIEGA", "JESUS CABRITO ARELLANO"],
                        r: "BAHIA"
                    }, {
                        q: "¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
                        a: ["TECATE", "SOL", "CARTA BLANCA"],
                        r: "TECATE"
                    }, {
                        q: "¿CUÁNTOS CLASICOS JUGO JESUS “EL CABRITO” ARELLANO?",
                        a: ["31", "22", "33"],
                        r: "31"
                    }],
                [{
                        q: "¿CUÁNTOS GOLES METIO EN CLASICOS GUILLERMO “EL GUILLE” FRANCO?",
                        a: ["5", "4", "6"],
                        r: "5"
                    },
                    {
                        q: "¿QUÉ ENTRENADOR HA DIRIGIDO A LOS DOS EQUIPOS DE NUEVO LEÓN?",
                        a: ["MIGUEL MEJIA BARON", "ALBERTO GUERRA", "TOMAS BOY"],
                        r: "MIGUEL MEJIA BARON"
                    },
                    {
                        q: "¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
                        a: ["TECATE", "BOHEMIA", "AMSTEL ULTRA"],
                        r: "TECATE"
                    }, {
                        q: "¿CUÁNTOS CLASICOS JUGO LUIS ERNESTO PEREZ?",
                        a: ["27", "26", "32"],
                        r: "27"
                    }, {
                        q: "¿QUIÉNES FUERON LOS ANOTADORES DEL FAMOSO CLASICO “DEL DESCENSO”?",
                        a: ["SERGIO VERDIRAME Y LUIS MIGUEL SALVADOR", "BAHIA Y LUIS MIGUEL SALVADOR", "JOSE ANTONIO TATO NORIEGA Y SERGIO VERDIRAME"],
                        r: "SERGIO VERDIRAME Y LUIS MIGUEL SALVADOR"
                    }],
                [{
                        q: "¿CUÁNTOS GOLES METIO EN CLASICOS GUILLERMO “EL GUILLE” FRANCO?",
                        a: ["5", "4", "6"],
                        r: "5"
                    },
                    {
                        q: "¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB DE FUTBOL MONTERREY?",
                        a: ["TECATE", "AMSTEL ULTRA", "XX LAGER"],
                        r: "TECATE"
                    },
                    {
                        q: "¿ENTRENADOR CON MAYOR NUMERO DE VICTORIAS EN CLÁSICOS?",
                        a: ["VICTOR MANUEL VUCETICH", "RICARDO LAVOLPE", "MIGUEL “PIOJO” HERRERA"],
                        r: "VICTOR MANUEL VUCETICH"
                    }, {
                        q: "¿CUÁNTAS VICTORIAS CONSECUTIVAS TIENE RAYADOS SOBRE TIGRES EN CLÁSICOS?",
                        a: ["6", "7", "8"],
                        r: "6"
                    }, {
                        q: "¿CUÁL ES LA MÁXIMA GOLEADA HISTORICA DE RAYADOS A TIGRES?",
                        a: ["4 A 1", "6 A 2", "5 A 1"],
                        r: "4 A 1"
                    }],
                [{
                        q: "¿QUÉ ENTRENADOR A DIRIGIDO A LOS DOS EQUIPOS DE NUEVO LEÓN?",
                        a: ["MIGUEL MEJIA BARON", "ALBERTO GUERRA", "TOMAS BOY"],
                        r: "MIGUEL MEJIA BARON"
                    },
                    {
                        q: "¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB DE FUTBOL MONTERREY?",
                        a: ["TECATE", "AMSTEL ULTRA", "CARTA BLANCA"],
                        r: "TECATE"
                    },
                    {
                        q: "¿CUÁNTOS GOLES METIÓ EN CLÁSICOS GUILLERMO “EL GUILLE” FRANCO?",
                        a: ["5", "6", "7"],
                        r: "5"
                    }, {
                        q: "¿ANOTADOR DEL PRIMER GOL EN CLÁSICOS?",
                        a: ["AGUSTIN “CHAIRAS” PRIETO", "SERGIO LIRA", "FRANCISCO ROMERO"],
                        r: "AGUSTIN “CHAIRAS” PRIETO"
                    }, {
                        q: "¿AÑO DE FUNDIACIÓN DEL CLUB DE FUTBOL MONTERREY?",
                        a: ["1945", "1946", "1960"],
                        r: "1945"
                    }]
            ]
        };
    }
    CoverComponent.prototype.jugar = function (equipo) {
        var _this = this;
        this.cover = false;
        this.equipo = equipo;
        this.paquete = Math.floor(Math.random() * 4) + 0;
        this.shuffleArray();
        this.counter = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(this.count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            _this.change(_this.count);
            return --_this.count;
        }));
    };
    CoverComponent.prototype.selectAnswer = function (index) {
        if (this.equipo == 'tigres') {
            if (this.questions[this.equipo][this.paquete][this.cont].a[index] == this.questions[this.equipo][this.paquete][this.cont].r) {
                this.puntosTigres += 1;
            }
            else {
                this.puntosRayados += 1;
            }
        }
        else {
            if (this.questions[this.equipo][this.paquete][this.cont].a[index] == this.questions[this.equipo][this.paquete][this.cont].r) {
                this.puntosRayados += 1;
            }
            else {
                this.puntosTigres += 1;
            }
        }
        if (this.cont == 4) {
            this.equipo = '';
            this.resultado = true;
        }
        else {
            this.cont += 1;
        }
    };
    CoverComponent.prototype.change = function (number) {
        if (number == 1) {
            this.equipo = '';
            this.resultado = true;
        }
        else {
        }
    };
    CoverComponent.prototype.reiniciar = function () {
        this.cover = true;
        this.equipo = '';
        this.resultado = false;
        this.cont = 0;
        this.paquete = 0;
        this.count = 60;
        this.puntosTigres = 0;
        this.puntosRayados = 0;
    };
    CoverComponent.prototype.shuffleArray = function () {
        for (var index = 0; index < this.questions[this.equipo][this.paquete].length; index++) {
            // this.questions[this.paquete][index].a = this.questions[this.paquete][index].a.sort()
            for (var i = this.questions[this.equipo][this.paquete][index].a.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.questions[this.equipo][this.paquete][index].a[i];
                this.questions[this.equipo][this.paquete][index].a[i] = this.questions[this.equipo][this.paquete][index].a[j];
                this.questions[this.equipo][this.paquete][index].a[j] = temp;
            }
        }
    };
    CoverComponent.prototype.ngOnInit = function () {
    };
    CoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__(/*! ./cover.component.html */ "./src/app/cover/cover.component.html"),
            styles: [__webpack_require__(/*! ./cover.component.css */ "./src/app/cover/cover.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/questions-rayados/questions-rayados.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/questions-rayados/questions-rayados.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy1yYXlhZG9zL3F1ZXN0aW9ucy1yYXlhZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/questions-rayados/questions-rayados.component.html":
/*!********************************************************************!*\
  !*** ./src/app/questions-rayados/questions-rayados.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  questions-rayados works!\n</p>\n"

/***/ }),

/***/ "./src/app/questions-rayados/questions-rayados.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/questions-rayados/questions-rayados.component.ts ***!
  \******************************************************************/
/*! exports provided: QuestionsRayadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsRayadosComponent", function() { return QuestionsRayadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsRayadosComponent = /** @class */ (function () {
    function QuestionsRayadosComponent() {
    }
    QuestionsRayadosComponent.prototype.ngOnInit = function () {
    };
    QuestionsRayadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions-rayados',
            template: __webpack_require__(/*! ./questions-rayados.component.html */ "./src/app/questions-rayados/questions-rayados.component.html"),
            styles: [__webpack_require__(/*! ./questions-rayados.component.css */ "./src/app/questions-rayados/questions-rayados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsRayadosComponent);
    return QuestionsRayadosComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDQwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(router) {
        var _this = this;
        this.router = router;
        this.cont = 0;
        this.paquete = 0;
        this.count = 60;
        this.puntosTigres = 0;
        this.puntosRayados = 0;
        this.questions = [[{
                    q: "¿QUIÉN ANOTO EL GOL 100 DE LOS CLASICOS?",
                    a: ["SERGIO LIRA", "Verdirame", "Luis Miguel Salvador"],
                    r: "SERGIO LIRA"
                },
                {
                    q: "¿QUIÉN ES EL JUGADOR CON MAS CLASICOS JUGADOS POR PARTE DE TIGRES?",
                    a: ["TOMAS BOY", "Juninho", "Claudio Suarez"],
                    r: "TOMAS BOY"
                },
                {
                    q: "¿CUÁNTOS GOLES LLEVA ANDRE PIERRE GIGNAC EN CLÁSICOS?",
                    a: ["6", "4", "7"],
                    r: "6"
                }, {
                    q: "¿CUÁNTOS GOLES ANOTO LA PALMERA RIVAS EN CLÁSICOS?",
                    a: ["4", "2", "5"],
                    r: "4"
                }, {
                    q: "¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB TIGRES?",
                    a: ["TECATE", "CARTA BLANCA", "AMSTEL"],
                    r: "TECATE"
                }],
            [{
                    q: "¿DE QUÉ NACIONALIDAD ERA  EL JUGADOR CLAUDIO “EL DIABLO NUÑEZ?",
                    a: ["Chileno", "Uruguayo", "Argentino"],
                    r: "Chileno"
                },
                {
                    q: "¿CUÁNTOS GOLES ANOTO WALTER “EL DIVINO GAITAN EN CLASICOS?",
                    a: ["23", "35", "15"],
                    r: "23"
                },
                {
                    q: "¿CUÁNTOS CLASICOS JUGO JUNINHO?",
                    a: ["6", "4", "7"],
                    r: "6"
                }, {
                    q: "¿QUIÉN HA SIDO EL ENTRENADOR CON MAS CLASICOS DIRIGIDOS EN CLASICOS?",
                    a: ["TUCA FERRETI", "CARLOS MILOC", "DANIEL GUZMAN"],
                    r: "TUCA FERRETI"
                }, {
                    q: "¿CUÁL ES LA CERVEZA PATROCINADORA OFICIAL DEL CLUB TIGRES?",
                    a: ["TECATE", "CARTA BLANCA", "AMSTEL"],
                    r: "TECATE"
                }],
            [{
                    q: "¿CUÁL ES EL MARCADOR HISTORICO MAS GRANDE DE LOS CLASICOS GANADOS POR TIGRES?",
                    a: ["6 A 2", "6 a 1", "6 a 3"],
                    r: "6 A 2"
                },
                {
                    q: "¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
                    a: ["TECATE", "CARTA BLANCA", "SOL"],
                    r: "TECATE"
                },
                {
                    q: "¿CUÁNDO SE FUNDO LA BARRA LIBRES Y LOKOS?",
                    a: ["1998", "1983", "2002"],
                    r: "1998"
                }, {
                    q: "¿CUÁNTOS GOLES LLEVA JESUS DUEÑAS EN CLASICOS?",
                    a: ["3", "4", "1"],
                    r: "3"
                }, {
                    q: "¿DE QUÉ NACIONALIDAD ERA EL JUGADOR GERONIMO BARBADILLO?",
                    a: ["PERUANO", "Colombiano", "Venezolano"],
                    r: "PERUANO"
                }],
            [{
                    q: "¿QUIÉNES FUERON LOS ANOTADORES DE LA “FINAL REGIA” DE VUELTA POR PARTE DE TIGRES?",
                    a: ["Eduardo Vargas y Francisco Meza", "Eduardo Vargas y Andre Pierre Gignac", "Jesus Dueñas y Francisco Meza"],
                    r: "Eduardo Vargas y Francisco Meza"
                },
                {
                    q: "¿A QUÉ CERVEZA PERTENECE EL SLOGAN #SOMOSFUTBOL?",
                    a: ["TECATE", "HEINEKEN", "AMSTEL"],
                    r: "TECATE"
                },
                {
                    q: "¿QUÉ CLASICO FUE ANULADO POR ALINEACION INDEBIDA DEL JUGADOR OZMAR DONIZETE?",
                    a: ["61", "45", "78"],
                    r: "61"
                }, {
                    q: "¿QUÉ ENTRENADOR HA DIRIGIDO A LOS DOS EQUIPOS DE NUEVO LEON?",
                    a: ["MIGUEL MEJIA BARON", "ALBERTO GUERRA", "TOMAS BOY"],
                    r: "MIGUEL MEJIA BARON"
                }, {
                    q: "¿QUE JUGADOR HA MARCADO GOLES JUGANDO CON TIGRES Y JUGANDO CON RAYADOS?",
                    a: ["LUIS HERNANDEZ ", "ANTONIO DE NIGRIS", "“EL GRINGO” CASTILLO"],
                    r: "LUIS HERNANDEZ "
                }]
        ];
        this.paquete = Math.floor(Math.random() * 4) + 0;
        console.log(this.paquete);
        this.shuffleArray();
        this.counter = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(this.count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            _this.change(_this.count);
            return --_this.count;
        }));
    }
    QuestionsComponent.prototype.selectAnswer = function (index) {
        console.log(this.cont);
        if (this.questions[this.paquete][this.cont].a[index] == this.questions[this.paquete][this.cont].r) {
            this.puntosTigres += 1;
        }
        else {
            this.puntosRayados += 1;
        }
        if (this.cont == 4) {
            this.router.navigateByUrl("/cover");
        }
        else {
            this.cont += 1;
        }
    };
    QuestionsComponent.prototype.change = function (number) {
        if (number == 1) {
            this.router.navigateByUrl("/cover");
        }
        else {
        }
    };
    QuestionsComponent.prototype.shuffleArray = function () {
        for (var index = 0; index < this.questions[this.paquete].length; index++) {
            // this.questions[this.paquete][index].a = this.questions[this.paquete][index].a.sort()
            for (var i = this.questions[this.paquete][index].a.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.questions[this.paquete][index].a[i];
                this.questions[this.paquete][index].a[i] = this.questions[this.paquete][index].a[j];
                this.questions[this.paquete][index].a[j] = temp;
            }
        }
    };
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/e-mfcuellar/Documents/TradeUp/TriviaPalNorte/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map