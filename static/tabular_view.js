const text = document.getElementById('single-content').firstElementChild;
const textArray = text.innerHTML.split("\n");

let html_str = "";

for (var i=0; i<textArray.length; i++) {
  if (textArray[i].startsWith("~ Start")) {
    html_str += `<tr><td colspan='2'>${textArray[i]}</td></tr>`
  } else if
    (textArray[i].startsWith("M+F") ||
    textArray[i].startsWith("M") ||
    textArray[i].startsWith("C") ||
    textArray[i].startsWith("F")) {
      html_str += `<tr><td>${textArray[i]}</td>`
      html_str += `<td>${textArray[i + 1]}`
      html_str += `${textArray[i + 2]}</td></tr>`
      i += 2
  } else if (textArray[i].includes("(")) {
      html_str += `<tr><td colspan='2' style='text-align: end'>${textArray[i]}</td></tr>`
  } else {
      html_str += `<tr><td colspan='2'>${textArray[i]}${textArray[i + 1]}</td></tr>`
      i += 1
  }
}

document.getElementById('song-tbody').innerHTML = html_str;
