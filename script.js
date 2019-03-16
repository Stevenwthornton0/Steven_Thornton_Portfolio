function navBar() {
  $('nav').on('click', '.hamburger', function(event) {
    $('.topNav').toggleClass('responsive');
    // $('header').toggleClass('nav')
  })
}

function runPortfolio() {
  navBar();
}

$(runPortfolio);