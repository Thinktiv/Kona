var thisForm = "searchForm";

// load field names and default values into list
var defaultVals = new Array();
defaultVals[0] = new Array("q", "What are you looking for?");

// populate fields with default values on page load
function MPLoadDefaults() {
with (document.forms[thisForm]) {
for (var n=0; n<defaultVals.length; n++) {
var thisField = defaultVals[n][0];
var thisDefault = defaultVals[n][1];
if (elements[thisField].value == '')
elements[thisField].value = thisDefault;
}}}

// clear default value from field when selected
function MPClearField(field) {
var fieldName = field.name;
for (var n=0; n<defaultVals.length; n++) {
var thisField = defaultVals[n][0];
var thisDefault = defaultVals[n][1];
if (thisField == fieldName) {
if (field.value == thisDefault) field.value = '';
break;
}}}

// load default values if body tag is unavailable
window.onload = MPLoadDefaults;

//-->