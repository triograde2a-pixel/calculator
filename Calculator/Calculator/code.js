onEvent("ADD", "click", function( ) {
  var x = getNumber("T1") + getNumber("T2");
  setNumber("T3", x);
});
onEvent("SUB", "click", function( ) {
  var x = getNumber("T1") - getNumber("T2");
  setNumber("T3", x);
});
onEvent("MUL", "click", function( ) {
  var x = getNumber("T1") * getNumber("T2");
  setNumber("T3", x);
});
onEvent("DIV", "click", function( ) {
  var x = getNumber("T1") / getNumber("T2");
  setNumber("T3", x);
});
