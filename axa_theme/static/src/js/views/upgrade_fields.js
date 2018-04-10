odoo.define('axa_theme.upgrade_widgets', function (require) {
"use strict";
var basic_fields = require('web.basic_fields');
var field_registry = require('web.field_registry');
var relational_fields = require('web.relational_fields');

var UpgradeBoolean = basic_fields.FieldBoolean.extend({
    
    renderWithLabel: function () {},
});

field_registry
    .add('upgrade_boolean', UpgradeBoolean)
    .add('upgrade_radio', relational_fields.FieldRadio);

});
