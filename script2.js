function impureSetSVGContents(contents) {
  const art = document.getElementById("art2");
  art.innerHTML = contents;
  return art;
}

impureSetSVGContents(getTiles(100, 100, 5, 5, basicTile, { color: "orange" }));

function getTiles(width, height, cols, rows, makeTile, data) {
  const [colWidth, rowHeight] = [width / cols, height / rows];
  const [thisTile, newData] = makeTile(colWidth, rowHeight, data);
  return `${thisTile}
        ${
          cols > 1 // rest of this row to the right of this tile
            ? `<g transform="translate(${colWidth}, 0)">
            ${getTiles(
              width - colWidth,
              rowHeight,
              cols - 1,
              1,
              makeTile,
              newData
            )}
            </g>`
            : ``
        }
        ${
          rows > 1 // rows below this one
            ? `<g transform="translate(0, ${rowHeight})">
            ${getTiles(
              width,
              height - rowHeight,
              cols,
              rows - 1,
              makeTile,
              newData
            )}
            </g>`
            : ``
        }`;
}

function basicTile(width, height, { color }) {
  return [
    `<rect width=${width} height=${height} stroke="black" fill="${color}" />`,
    { color },
  ];
}
