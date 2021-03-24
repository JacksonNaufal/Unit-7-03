let age = 0

document.getElementById('button').addEventListener('click', button)

function button () {
  age = document.getElementById('input').value
  document.getElementById('parathanks').innerHTML =
    'Thank you for playing!'
  document.getElementById('parathanks').style.color = 'green'
  if (age >= 100) {
    document.getElementById('para').innerHTML =
    ('Haha funny, but yes you can have drivers lessons!')
    document.getElementById('para').style.color = 'green'
  } else if (age >= 16) {
    document.getElementById('para').innerHTML =
    ('You can get driving lessons!')
    document.getElementById('para').style.color = 'green'
  } else if (age >= 15) {
    document.getElementById('para').innerHTML =
    ('Wait one more year!')
    document.getElementById('para').style.color = 'red'
  } else if (age >= 14) {
    document.getElementById('para').innerHTML =
   ('It will be a couple more years for you!')
    document.getElementById('para').style.color = 'red'
  } else if (age >= 13) {
   document.getElementById('para').innerHTML =
     ('You still got quite a ways to go, but it will arive sooner than you know it, so thats a reminder to take everyday as a gift!')
    document.getElementById('para').style.color = 'red'
  } else if (age != 13) {
    document.getElementById('para').innerHTML =
     ('You still got quite a ways to go, but it will arive sooner than you know it, so thats a reminder to take everyday as a gift!')
    document.getElementById('para').style.color = 'red'
    document.getElementById('parathanks').innerHTML =
    'Thank you for playing!'
    document.getElementById('parathanks').style.color = 'green'
  }
}
