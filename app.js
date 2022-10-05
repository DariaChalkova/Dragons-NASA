const containerTab = document.getElementById('dragonDescr')

const descr = document.createElement('div')
descr.setAttribute('class', 'descr')

containerTab.appendChild(descr)

// const cont = document.getElementsByClassName ('details')
// const det = document.createElement('div')
// det.setAttribute('class', 'det')

// cont.appendChild(det)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.spacexdata.com/v4/dragons', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(dragon => {
      const main = document.createElement('div')
      main.setAttribute('class', 'main')

      const h21 = document.createElement('h2')
      h21.textContent = dragon.name

      const a1 = document.createElement('a')
      a1.href = dragon.wikipedia
      a1.textContent = dragon.name
      a1.target = "_blank"

      const p1 = document.createElement('p')
      p1.textContent = `${dragon.description}...`

      const img1 = document.createElement('img')
      img1.src = dragon.flickr_images
      img1.alt = dragon.name

      const parameter = document.createElement('div')
      parameter.setAttribute('class', 'parameter')

      const height = document.createElement('p')
      height.textContent = `Height: ${dragon.height_w_trunk.meters}`

      const mass = document.createElement('p')
      mass.textContent = `Dry Mass: ${dragon.dry_mass_kg}kg`

      const year = document.createElement('p')
      year.textContent = `Orbit duration: ${dragon.orbit_duration_yr}years`

      descr.appendChild(main)
      main.appendChild(h21)
      main.appendChild(p1)
      main.appendChild(a1)
      main.appendChild(img1)

      descr.appendChild(parameter)
      parameter.appendChild(height)
      parameter.appendChild(mass)
      parameter.appendChild(year)


    })
  } else {
    const errorMessage = document.createElement('alert')
    errorMessage.textContent = `Gah, it's not working!`
    containerTab.appendChild(errorMessage)
  }
}

request.send()

//geting from the 2-nd API//
const app1 = document.getElementById('add')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app1.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.spacexdata.com/v4/dragons', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(racket => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h2 = document.createElement('h2')
      h2.textContent = racket.name

      const a = document.createElement('a')
      a.href = racket.wikipedia
      a.textContent = racket.name
      a.target = "_blank"

      const p = document.createElement('p')
      // racket.description = racket.description.substring(0, 300)
      p.textContent = `${racket.description}...`

      const img = document.createElement('img')
      img.src = racket.flickr_images
      img.alt = racket.name

      container.appendChild(card)
      card.appendChild(h2)
      card.appendChild(p)
      card.appendChild(a)
      card.appendChild(img)
    })
  } else {
    const errorMessage = document.createElement('alert')
    errorMessage.textContent = `Gah, it's not working!`
    app1.appendChild(errorMessage)
  }
}

request.send()