let isUserClickedRated = false
let submit = document.getElementById('submit')
let ratingNumber = null
submit.addEventListener('click', async (e) => {
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
    document.getElementById('second').style.animation =
      'example2 500ms ease-in-out 100ms forwards'
    document.getElementById('orange').style.animation =
      'example3 600ms 600ms forwards'
    document.getElementById('main').style.animation =
      'example4 600ms 600ms forwards'
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
