const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMouseLocation(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  const mouseLocation = getMouseLocation(e);
  ctx.lineTo(mouseLocation.x, mouseLocation.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 8;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mouseLocation = getMouseLocation(e);
  ctx.beginPath();
  ctx.moveTo(mouseLocation.x, mouseLocation.y);

  canvas.addEventListener("mousemove", mouseMove);

  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
