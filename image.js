window.addEventListener('scroll', function() {
    var yOffset = window.pageYOffset;
    var background = document.querySelector('.background');
    background.style.backgroundPositionY = -yOffset * 0.5 + 'px';
  });