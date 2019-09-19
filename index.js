const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  
  input.addEventListener('keydown', function(e) {
  if (e.which === code.length)
   return 'Awesome'
   else
return "nothing"
};
}
  
  
