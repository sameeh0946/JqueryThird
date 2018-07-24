 $(document).ready(function() {
     
      
     document.getElementById("button-disable").disabled = true;
      $('.search-button').hover(function() {
      $(this).addClass("hover-style");
      console.log("div was hovered");
                                           }, function(){
        $(this).removeClass("hover-style");
                                                            });
      
     let wid = $(window).width();
     console.log(wid);
        
  $(".mob-view").click(function(){
      console.log("click hua");
 if(wid>0){
     $(".button-edit2,.button-edit-dropdown,.button-edit3 ").toggle();
     }
     else{
               $(".button-edit2,.button-edit-dropdown,.button-edit3 ").show();
     }
  });
    


      $('.button-edit1,.button-edit2,.button-edit3,.button-edit-dropdown').hover(function() {
      $(this).addClass("hover-button");
      console.log("nav was hovered");
                                           }, function(){
        $(this).removeClass("hover-button");
                                                            });
    
           
  

    });

//    end of ready        
    
        
