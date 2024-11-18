import './styles.css'

// Cache elements using `getElementById`
const topMenuEl = document.getElementById('top-menu') // Requirement: `getElementById`
const mainEl = document.querySelector('main') // Requirement: `querySelector`
const subMenuEl = document.getElementById('sub-menu')

// Menu data structure with nested submenu links
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
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
mainEl.classList.add('flex-ctr')

// Part 2: Creating a Menu Bar
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

// Part 3: Adding Menu Buttons with Iteration
menuLinks.forEach((link) => {
  const newEl = document.createElement('a') // Requirement: `createElement`
  newEl.href = link.href
  newEl.textContent = link.text
  topMenuEl.appendChild(newEl) // Requirement: `appendChild`
})

// Part 4: Creating the Submenu
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// Add additional submenu elements using DocumentFragment for efficiency
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '' // Clear current content

  const fragment = document.createDocumentFragment() // Requirement: `DocumentFragment`
  subLinks.forEach((link) => {
    const newEl = document.createElement('a')
    newEl.href = link.href
    newEl.textContent = link.text
    fragment.appendChild(newEl.cloneNode(true)) // Requirement: `cloneNode`
  })

  subMenuEl.appendChild(fragment) // Append fragment to the submenu element
}

// Part 5: Adding Menu Interaction
const topMenuLinks = topMenuEl.querySelectorAll('a') // Requirement: `querySelectorAll`

topMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.tagName !== 'A') return

  const clickedLink = event.target
  console.log(clickedLink.textContent) // Log the content

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

// Part 6: Adding Submenu Interaction
subMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.tagName !== 'A') return

  const clickedSubLink = event.target
  console.log(clickedSubLink.textContent)

  subMenuEl.style.top = '0' // Hide submenu
  topMenuLinks.forEach((link) => link.classList.remove('active')) // Remove active state from top menu links

  // Update main content
  mainEl.innerHTML = `<h1>${clickedSubLink.textContent}</h1>` // Requirement: `innerHTML`
})

// Browser Object Model (BOM) Examples
alert('Welcome to the interactive menu!') // Requirement: BOM method - `alert`
console.log(window.location.href) // Log current URL - Requirement: BOM `window.location`

// Form with validation (Add this to HTML)
/* 
<form id="userForm">
  <input type="text" id="username" name="username" required minlength="4" placeholder="Enter username" />
  <button type="submit">Submit</button>
</form>
*/

const userForm = document.getElementById('userForm') // Cache form element
userForm.addEventListener('submit', (event) => {
  // Requirement: Event-based validation
  event.preventDefault()
  const username = document.getElementById('username').value
  if (username.length < 4) {
    alert('Username must be at least 4 characters long')
  } else {
    alert(`Welcome, ${username}`)
  }
})
