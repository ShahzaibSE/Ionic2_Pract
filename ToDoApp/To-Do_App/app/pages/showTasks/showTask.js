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
var core_1 = require('angular2/core');
//Import Service.
var todo_service_1 = require('./../../services/todo.service');
var Show = (function () {
    function Show(ToDo) {
        this.ToDo = ToDo;
        this.tasks = [];
        //parsed tasks into string.
        this._tasks = [];
        this.deleteEvent = new core_1.EventEmitter();
    }
    Show.prototype.getTask = function () {
        this.tasks = this.ToDo.getTodo();
        console.log("ToDos:");
        console.log(this.tasks);
    };
    Show.prototype.get_Task = function () {
        var keys = this.ToDo.getTasks();
        console.log("Keys : " + keys);
        for (var i = 0; i < localStorage.length; i++) {
            this.tasks.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        console.log("Your Todos");
        console.log("ToDos : " + this.tasks);
    };
    Show.prototype.deleteTodo = function () {
        var key_data_to_delete = this.ToDo.getTasks();
        for (var i = 0; i < localStorage.length; i++) {
            this.deleteEvent.emit(localStorage.getItem(key_data_to_delete[i]));
        }
        //this.deleteEvent.add()
    };
    Show = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/showTasks/showTask.html'
        }), 
        __metadata('design:paramtypes', [todo_service_1.Todo_Service])
    ], Show);
    return Show;
}());
exports.Show = Show;
