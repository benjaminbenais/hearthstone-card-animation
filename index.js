const img = document.getElementById('card');

const rotateElement = function rotateElement({
  offsetX,
  offsetY,
  width,
  height,
}) {
  const middleX = height / 2;
  const middleY = width / 2;

  const x = (offsetY * 100) / middleX / 10 - 10;
  const y = (offsetX * 100) / middleY / -10 + 10;

  return { x, y };
};

img.addEventListener('mousemove', function (event) {
  // Mouse position relative to the card
  const { offsetX, offsetY, target } = event;

  // Card width and height
  const { clientWidth, clientHeight } = target;

  const { x, y } = rotateElement({
    offsetX,
    offsetY,
    width: clientWidth,
    height: clientHeight,
  });

  const rotateX = `rotateX(${x}deg)`;
  const rotateY = `rotateY(${y}deg)`;

  this.style.transform = `${rotateX} ${rotateY}`;
});

img.addEventListener('mouseleave', function () {
  this.style.transform = '';
});
