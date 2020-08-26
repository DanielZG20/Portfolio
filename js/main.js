const toggle = document.getElementById('icon-toggle');

toggle.addEventListener('click', function () {
  const navbar_content = document.getElementById('navbar-content')
  navbar_content.classList.add('active')
})

