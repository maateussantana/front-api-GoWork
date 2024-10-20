url = "https://7f0a1097-52d3-4d83-92c8-e2b77e57eeba-00-35u6jvl44afls.janeway.repl.co/pessoas/"

fetch(url).then((res) => {
  return res.json();
}).then((data) => {
  console.log(data);
})