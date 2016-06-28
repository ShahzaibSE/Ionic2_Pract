"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
//Import Components.
var add_1 = require('./../add/add');
var showTask_1 = require('./../showTasks/showTask');
var edit_1 = require('./../edit/edit');
//Import Service.
var todo_service_1 = require('./../../services/todo.service');
var Menu = (function () {
    function Menu(nav, TodoService) {
        this.nav = nav;
        this.TodoService = TodoService;
        //Pages.
        this._Add = add_1.Add;
        this._Show = showTask_1.Show;
        this._Edit = edit_1.Edit;
        this.nav = nav;
        this.TodoService.test();
    }
    //Navigation Handlers
    Menu.prototype.gotoPage = function (page) {
        this.nav.push(page);
    };
    Menu = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/menu/menu.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, todo_service_1.Todo_Service])
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
