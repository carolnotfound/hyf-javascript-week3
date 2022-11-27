let x = 0;
let y = 0;

const callback = (event) => {
  x = event.x;
  y = event.y;
}

window.addEventListener('mousemove', callback);

const avgArrayX = [];
const avgArrayY = [];

const interval = setInterval(() => {
  console.log('position x', x, 'position y', y);

  avgArrayX.push(x)
  avgArrayY.push(y)
}, 1000);

setTimeout(() => {
  clearInterval(interval);

  console.log('array x', avgArrayX);
  console.log('array y', avgArrayY);

  const averageX = avgArrayX.reduce((acc, curr) => acc + curr);
  const averageY = avgArrayY.reduce((acc, curr) => acc + curr);


  const text = document.querySelector('#text');
  console.log('average x:', (averageX / avgArrayX.length));
  console.log('average y:', (averageY / avgArrayY.length));
}, 5000);

