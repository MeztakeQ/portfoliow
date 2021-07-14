$(function () {
  
   var mixer = mixitup('.portfolio__items');
	
	const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
    
    
    



    
    
    
});

$(function () {
var more = document.querySelectorAll('.portfolio__wrap');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    var showPerClick = 2;
    
    var hidden = this.parentNode.querySelectorAll('.portfolio__item.hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      hidden[i].classList.add('.portfolio__item');
      hidden[i].classList.remove('hidden');
    }
  });
  }
  
   new WOW().init();
    });


