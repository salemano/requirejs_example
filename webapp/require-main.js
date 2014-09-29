/**
 * Created by Sergey on 9/28/2014.
 */
require.config({
    baseUrl: '../webapp',
    paths: {
        jquery: 'libs/jquery',
        writer: 'modules/module2/writer',
        util: 'modules/module1/util'
        /*jquery_ui: '/Scripts/libs/jquery/jquery-ui-1.8.24.min',
        underscore: '/Scripts/libs/underscore/underscore.min',
        'jasmine': '/Scripts/libs/jasmine/jasmine',
        'jasmine-html': '/Scripts/libs/jasmine/jasmine-html',
        modules: '/Scripts/modules',
        parser:'/Scripts/modules/parser',
        services: '/Scripts/services',
        libs: '/Scripts/libs',
        specs: '/Scripts/specs'*/
    },
    shim: {
        /*jquery: {
            exports: 'jquery'
        },
        'underscore': {
            exports: '_'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }*/
    }
});
var app;

require(['writer'], function (writer) {
    writer.write();
    app = writer;
});