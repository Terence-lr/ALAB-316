import './styles.css'

// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
]

// Part 1: Getting Started
const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
mainEl.classList.add('flex-ctr')

// Part 2: Creating a Menu Bar
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

// Part 3: Adding Menu Buttons
menuLinks.forEach((link) => {
  const newEl = document.createElement('a')
  newEl.href = link.href
  newEl.textContent = link.text
  topMenuEl.append(newEl)
})

// Part 4: Creating the Submenu
const subMenuEl = document.querySelector('#sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// Part 5: Adding Menu Interaction
const topMenuLinks = topMenuEl.querySelectorAll('a')
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.tagName !== 'A') return

  const clickedLink = event.target
  console.log(clickedLink.textContent)

  // Toggle "active" state for clicked link
  topMenuLinks.forEach((link) => link.classList.remove('active'))
  if (!clickedLink.classList.contains('active')) {
    clickedLink.classList.add('active')
  } else {
    clickedLink.classList.remove('active')
    subMenuEl.style.top = '0'
    return
  }

  // Toggle submenu based on clicked link's subLinks
  const linkObj = menuLinks.find(
    (link) => link.text === clickedLink.textContent
  )
  if (linkObj && linkObj.subLinks) {
    buildSubMenu(linkObj.subLinks)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0'
  }
})

// Helper function to build the submenu
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '' // Clear existing content
  subLinks.forEach((link) => {
    const newEl = document.createElement('a')
    newEl.href = link.href
    newEl.textContent = link.text
    subMenuEl.append(newEl)
  })
}

// Part 6: Adding Submenu Interaction
subMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.tagName !== 'A') return

  const clickedSubLink = event.target
  console.log(clickedSubLink.textContent)

  subMenuEl.style.top = '0' // Hide submenu
  topMenuLinks.forEach((link) => link.classList.remove('active')) // Remove active state from top menu links

  // Update main content
  mainEl.innerHTML = `<h1>${clickedSubLink.textContent}</h1>`
})
