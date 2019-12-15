 const card = $(".perspective__card");

 $("body").on("mousemove", function (t) {
     let vertical = -($(window).innerWidth() / 2 - t.pageX) / 60,
         horizontal = ($(window).innerHeight() / 2 - t.pageY) / 60;
     card.attr("style", "transform: rotateY(" + vertical + "deg) rotateX(" + horizontal + "deg)")
 })
 
 






