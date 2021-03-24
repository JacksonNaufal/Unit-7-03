let age = 0
// This is a let statement for age, so it is defined

document.getElementById('button').addEventListener('click', button)
// This allows the website to know to press the Button

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
  } else if (age !== 13) {
    document.getElementById('para').innerHTML =
     ('You still got quite a ways to go, but it will arive sooner than you know it, so thats a reminder to take everyday as a gift!')
    document.getElementById('para').style.color = 'red'
    document.getElementById('parathanks').innerHTML =
    'Thank you for playing!'
    document.getElementById('parathanks').style.color = 'green'
  }
}
// all those functions activate when you enter a certain number inside of the input botx and press button, they give you a certain message if you're able to drive or apply for drivers lessons etc, and each of them have if or else if statements, so the website knows that if you are this age, or that age, you can or can not have drivers lessons.
