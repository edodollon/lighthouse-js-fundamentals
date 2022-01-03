const urlEncode = function(text) {
  let url = text.trim();

  for (let i = 0; i < url.length; i++) {
    if (url[i] === " ") {
      url = url.split(" ").join("%20");
    }
  }

  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));