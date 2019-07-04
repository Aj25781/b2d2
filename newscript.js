$(document).ready(function(){


    $("#bttn").click(function(){
        var text_value = $("#checkthis").val();
            console.log("");
        
       /* $.ajax({
            type:"GET",
            url:"https://api.themoviedb.org/3/discover/movie?api_key=0b7d86673897755716688a378195bec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",

           data:{
              
                },
            dataType: "json",

            success:function(result){
                console.log(result.results[0]);
                
                },
            error:function(){
                
            }
           
    });
  
    });