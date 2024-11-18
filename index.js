document.addEventListener('DOMContentLoaded', () => {
  // Menu data structure
  var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ]

  // Part 1: Getting Started
  // 1. Select and cache the <main> element.
  const mainEl = document.querySelector('main')

  // 2. Set the background color of mainEl using the CSS variable.
  mainEl.style.backgroundColor = 'var(--main-bg)'

  // 3. Set the content of mainEl to include an <h1> element.
  const heading = document.createElement('h1')
  heading.textContent = 'DOM Manipulation'
  mainEl.appendChild(heading) // Add the <h1> to the <main>

  // 4. Add a class of flex-ctr to mainEl.
  mainEl.classList.add('flex-ctr')

  // Part 2: Creating a Menu Bar
  // 1. Select and cache the <nav id="top-menu"> element.
  const topMenuEl = document.getElementById('top-menu')

  // 2. Set the height of the topMenuEl element to be 100%.
  topMenuEl.style.height = '100%'

  // 3. Set the background color of topMenuEl using the CSS variable.
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

  // 4. Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around')

  // Part 3: Adding Menu Buttons
  // 1. Loop through the menuLinks array to create menu items.
  for (let i = 0; i < menuLinks.length; i++) {
    // Create an <a> element.
    const link = document.createElement('a')

    // Set the href attribute and text content of the link.
    link.href = menuLinks[i].href
    link.textContent = menuLinks[i].text

    // Append the link to the topMenuEl.
    topMenuEl.appendChild(link)
  }
})
