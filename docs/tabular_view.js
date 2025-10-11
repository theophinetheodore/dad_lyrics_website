const text = document.getElementById('single-content').firstElementChild;
const textArray = text.innerHTML.split("\n");

let html_str = "";

for (var i=0; i<textArray.length; i++) {
  if (textArray[i].startsWith("~")) {

    html_str += `<div><b>${textArray[i]}</b></div>`
    html_str += `<hr id="notation-divider">`

  } else if (textArray[i].startsWith("M") || textArray[i].startsWith("C") || textArray[i].startsWith("F")) {

    html_str += `<div><b>${textArray[i]}</b></div>`

  } else if (textArray[i].startsWith(".")) {

    html_str += `<hr id="notation-divider">`

  } else if (textArray[i].includes("Link")) {

    html_str += `<div style="text-align: right;"><b>${textArray[i]}</b></div>`

  } else if (textArray[i].startsWith("(")) {

    html_str += `<div style="text-align: right;"><b>${textArray[i]}</b></div>`
    html_str += `<hr id="notation-divider">`

  } else {

    html_str += `<div style="text-align: center;">${textArray[i]}</div>`

  }
}

document.getElementById('notation-container').innerHTML = html_str;
