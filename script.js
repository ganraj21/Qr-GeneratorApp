const wrapper = document.querySelector('.wrapper'),
  qrinput = document.querySelector('.form input'),
  generateBtn = document.querySelector('.form button'),
  qrImg = wrapper.querySelector('.qr-code img')

generateBtn.addEventListener('click', () => {
  let qrValue = qrinput.value
  if (!qrValue) return
  let t = (generateBtn.innerText = 'Generating QR Code...')
  console.log('time delay')
  let y = setInterval(t, 3000)

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
  // qrImg.onloadend = function () {}
  qrImg.addEventListener('load', () => {
    wrapper.classList.add('active')
  })
  generateBtn.innerHTML = 'QR Code Generated'
  clearInterval(y)
})

document.getElementById('nav-bar').addEventListener('click', () => {
  const hamburger = document.querySelector('.nav-bar')
  const navMenu = document.querySelector('.nav-menu')

  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  console.log('you clicked')
})
