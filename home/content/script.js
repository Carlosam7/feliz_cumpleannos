var regalo = document.getElementById("btnRegalo");
var noRegalo = document.getElementById("btnNoRegalo");
var Dialog1 = document.getElementById("regalo");
var Dialog2 = document.getElementById("noRegalo");

// Update button opens a modal dialog
regalo.addEventListener("click", function () {
  Dialog1.showModal();
});
noRegalo.addEventListener("click", function () {
  Dialog2.showModal();
});