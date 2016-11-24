$(document).ready(function() {
       $("button#hello").click(function() {
       $("ul#user").prepend("<li>Hello!</li>");
       $("ul#webpage").prepend("<li>hihihi hello back!</li>");
       $('li').click(function() {
        alert('hi');
           });
       });

       $("button#goodbye").click(function() {
         $("ul#user").prepend("<li>Goodbye!</li>");
           $("ul#webpage").prepend("<li>that soon?</li>");
       });

       $("button#stop").click(function() {
         $("ul#user").prepend("<li>Stop copying me!</li>");
         $("ul#webpage").prepend("<li>hehehe kidding!</li>");
       });
     });
     $("ul#user").children("li").first().click(function(){
      $(this).remove();
   });
   $("ul#webpage").children("li").first().click(function(){
     $(this).remove();
  });
