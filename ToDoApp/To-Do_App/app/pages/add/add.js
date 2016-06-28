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
var http_1 = require('angular2/http');
//Import Service.
var todo_service_1 = require('./../../services/todo.service');
var Add = (function () {
    function Add(ToDo, http) {
        this.ToDo = ToDo;
        this.http = http;
        this.tasks = [];
    }
    Add.prototype.addTask = function (Tid, Tname) {
        //this.ToDo.addTodo(Tid,Tname);
        this.ToDo.addTask(Tid, Tname);
        Tid.value = "";
        Tname.value = "";
    };
    //Adding Task on the server.
    Add.prototype.addTasks = function (Tid, Tname) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        var options = new http_1.RequestOptions();
        options.headers = headers;
        var obj = { Tid: Tid.value, Tname: Tname.value };
        this.http.post("http://localhost:3000/addData/tasks", JSON.stringify(obj), options).
            subscribe(function (tasks) {
            _this.tasks.push(obj);
            //console.log(tasks);
        });
    };
    Add = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/add/add.html'
        }), 
        __metadata('design:paramtypes', [todo_service_1.Todo_Service, http_1.Http])
    ], Add);
    return Add;
}());
exports.Add = Add;
