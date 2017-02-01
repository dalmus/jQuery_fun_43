$('#drinks').append('<li>wine</li>')

$('#foods').append('<li>cereal</li>', '<li>sandwich</li>')
//--
$('#addFood').click(function(){
  var newFood = $('#foodInput').val()
  if(newFood != ''){
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
  }
})

$('#addDrinks').click(function(){
  var newDrinks = $('#drinksInput').val()
  if(newDrinks != ''){
  $('#drinks').append('<li>' + newDrinks + '</li>')
  $('#drinksInput').val('')
  }
})
