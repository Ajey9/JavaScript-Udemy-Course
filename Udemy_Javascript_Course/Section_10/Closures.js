let girl;

function before() {
  let gname = "Neha";
  return (girl = function () {
    console.log(gname);
  });
}
before();
girl();

function after() {
  let gname = "Rutu";
  return (girl = function () {
    console.log(gname);
  });
}
after();
girl();
console.dir(girl);
