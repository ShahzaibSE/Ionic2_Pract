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
var core_1 = require('angular2/core');
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());
exports.Todo = Todo;
var Todo_Service = (function () {
    function Todo_Service() {
        this.Todos = [];
    }
    Todo_Service.prototype.addTodo = function (Tid, Tname) {
        var tmp_obj = { Tid: Tid.value, Tname: Tname.value };
        this.Todos.push(tmp_obj);
        console.log(this.Todos);
    };
    Todo_Service.prototype.getTodo = function () {
        return this.Todos;
    };
    Todo_Service.prototype.addTask = function (Tid, Tname) {
        var todos = { Tid: Tid.value, Tname: Tname.value };
        localStorage.setItem(Tid.value, JSON.stringify(todos));
        /*let alert = Alert.create(
            {
                title:"Your todo",
                subTitle:localStorage.getItem(Tid)
            }
        )*/
        //this.nav.present(alert);
    };
    Todo_Service.prototype.getTasks = function () {
        console.log(localStorage.length);
        //console.log(Object.keys(localStorage))  //Object.keys lists all own keys on an object.
        var keys = Object.keys(localStorage);
        console.log("Local Storage keys");
        console.log(keys);
        console.log("LocalStorage Data");
        for (var i = 0; i < localStorage.length; i++) {
            var localStorageData = localStorage.getItem(keys[i]);
        }
        console.log(localStorageData);
        var Parsed_LocalStorageData = JSON.parse(localStorageData);
        console.log("Parsed LocalStorage Data");
        console.log(Parsed_LocalStorageData);
        console.log("Task ID : " + Parsed_LocalStorageData.Tid);
        console.log("Task Name : " + Parsed_LocalStorageData.Tname);
        return Object.keys(localStorage);
    };
    Todo_Service.prototype.deleteTask = function () {
        //Delete your tasks.
    };
    Todo_Service.prototype.editTask = function (Tid, Tname) {
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == Tid) {
                console.log("Key Found");
                localStorage.setItem(localStorage.key(i), JSON.stringify({ Tid: Tid, Tname: Tname }));
                break;
            }
            else {
                console.log("Key not found");
            }
        }
        //Test Snippet Code.
        /*if(localStorage.key(1) == "2")
        {
            console.log("Specfic key found");
        }
        else
        {
            console.log("Specfic key not found");
        }*/
    };
    Todo_Service.prototype.deleteTodo = function () {
        for (var i = 0; i < localStorage.length; i++) {
        }
    };
    Todo_Service.prototype.test = function () {
        var item_Key = localStorage.key(1);
        console.log(item_Key);
        var test_keys = [];
        for (var i = 0; i < localStorage.length; i++) {
            test_keys.push(localStorage.key(i));
        }
        console.log("Names of nth keys.");
        console.log(test_keys);
    };
    Todo_Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Todo_Service);
    return Todo_Service;
}());
exports.Todo_Service = Todo_Service;
