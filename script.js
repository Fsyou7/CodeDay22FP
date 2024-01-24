console.log("script is running");

function impureSetSVGContents(contents) {
  const art = document.getElementById("art");
  art.innerHTML = contents;
  return art;
}

impureSetSVGContents(getPattern("limegreen", "rebeccapurple", 100));

function getPattern(color1, color2, width) {
  const thisTile = `<rect x=0 y=0 width=${width} height=${width} fill=${color1} />`;

  if (width <= 20) {
    return `${thisTile}`;
  }

  return `${thisTile} <g transform="translate(${
    width / 2
  }) rotate(45)"> ${getPattern(
    color2,
    color1,
    width * 0.7071067811865476
  )} </g>`;
}
