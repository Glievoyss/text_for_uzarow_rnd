// var req;

// function load_text(url) {
//   if (window.XMLHttpRequest) {
//     req = new XMLHttpRequest();
//   } else if (window.ActiveXObject) {
//     req = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   if (req != undefined) {
//     req.onreadystatechange = function() {
//       loadDone();
//     };
//     req.open("GET", url, true);
//     req.send("");
//   } else {
//     alert("Can't load file");
//   }
// }

// function loadDone() {
//   if (req.readyState == 4) {
//     if (req.status == 200) {
//       alert("loaded:\n" + req.responseText);
//     } else {
//       alert("error:\n" + req.status + "\n" + req.statusText);
//     }
//   }
// }

// load_text(
//   "https://github.com/Glievoyss/text_for_uzarow_rnd/blob/master/README.md"
// );
