let isUserClickedRated = false
let submit = document.getElementById('submit')
let ratingNumber = null
submit.addEventListener('click', (e) => {
  e.preventDefault()
  if (isUserClickedRated === false) {
    alert('please select the rating first')
  } else {
    console.log('clicked')
    document.getElementById(
      'rating'
    ).innerText = `You selected ${ratingNumber} out of 5`
    document.getElementById('first').style.animation =
      'example1 100ms ease-out forwards'
    setTimeout(function () {
      document.getElementById('second').style.animation =
        'example2 250ms ease-in-out forwards'
      document.getElementById('orange').style.animation =
        'example3 600ms ease-out 250ms forwards'
    }, 100)
  }
})
const ratings = ['1', '2', '3', '4', '5']
for (let i = 0; i < ratings.length; i++) {
  document.getElementById(ratings[i]).addEventListener('click', function (e) {
    e.preventDefault()
    isUserClickedRated = true
    ratingNumber = Number(e.target.id)
    removeBackgroundColor()
    this.style.backgroundColor = 'hsl(217, 12%, 63%)'
    this.style.color = 'white'
  })
}
function removeBackgroundColor() {
  for (let i = 0; i < ratings.length; i++) {
    document.getElementById(ratings[i]).style.backgroundColor = '#2f353c'
    document.getElementById(ratings[i]).style.color = 'hsl(217, 12%, 63%)'
  }
}
