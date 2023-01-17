const downloadbutton = document.querySelector(".button-23");

downloadbutton.addEventListener("click", downloadFile);

function downloadFile(filename) {
  var link = document.createElement("a");
  link.href = "/download?filename=" + filename;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}