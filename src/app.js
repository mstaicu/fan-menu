'use strict';

/** Define main module and:
 1. Load the module which handles the templates of all the components
 2. Load any additional dependencies
*/
require('../build/templates.js');
require('./fan-menu/fan-menu');

angular.module('app', ['templates', 'projects.fanMenu']);
