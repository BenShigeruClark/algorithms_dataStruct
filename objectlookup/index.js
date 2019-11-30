function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    "": undefined
  }

  result = lookup[val];
  return result;
}

console.log(phoneticLookup('alpha'))
console.log(phoneticLookup("echo"))
console.log(phoneticLookup(''))