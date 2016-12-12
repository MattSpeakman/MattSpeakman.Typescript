// This file creates the necessary dependency injection of scope etc... and instantiates each of the controllers
/// <reference path="../typings/angularjs/angular.d.ts"/>
if (!angular)
    alert("Angular not loaded yet! Code is in the wrong place!");
// Set the angular module
angular.module('MattSpeakman');
// Set a mod variable in this file to the module for less code
var mod = angular.module('MattSpeakman');
// Create a SharedScopeService that will be responsible for holding data inputted by a User
mod.service('sharedScopeService', [MattSpeakman.SharedScopeService]);
// Instantiate the homeController passing in the sharedScopeService.
mod.controller('homeController', ['$scope', 'sharedScopeService', MattSpeakman.HomeController]);
