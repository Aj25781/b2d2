
     
            /* **/
          
                            var house2=new Array(20);
                            var tvalue;
          /*  $(document).ready(function(){
            $("#bttn").click(function(){
                
                $.ajax({
                    type:"GET",
                    url:"https://api.themoviedb.org/3/discover/movie?api_key=0b7d86673897755716688a378195bec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",

                   data:{
                      
                        },
                    dataType: "json",

                    success:function(result){
                        var house1 = new Array(20); 
                          result.results.forEach(myFunction);
                          function  myFunction(item,index){
                              house1[index]=item;

                             house2[index]=house1[index].original_title;
                          
                             
                    $("#checkthis").autocomplete({
                                        source:house2
                                                },{
                                        autoFocus:true,
                                        delay:500,
                                        minLength:2
                                    });
                          }
                            
                         
                         },
                    error:function(){
                        
                    }
                   
            });
          
            });
         
               
              
          
        });*/
          $(document).ready(function(){


            $("input").focus(function(){
                
                $.ajax({
                    type:"GET",
                    url:"https://api.themoviedb.org/3/discover/movie?api_key=0b7d86673897755716688a378195bec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",

                   data:{
                      
                        },
                    dataType: "json",

                    success:function(result){
                        console.log(result);
                        var house1 = new Array(20); 
                          result.results.forEach(myFunction);
                          function  myFunction(item,index){
                              house1[index]=item;

                             house2[index]=house1[index].original_title;
                          
                             
                    $("#checkthis").autocomplete({
                                        source:house2
                                                },{
                                        autoFocus:true,
                                        delay:500,
                                        minLength:2
                                    });
                          }
                            
                         
                         },
                    error:function(){
                        
                    }
                   
            });
          
            });

            $( "input" )
            .keyup(function() {
                 tvalue = $( this ).val();
                console.log(tvalue);
            })
            .keyup();

            $("#bttn").click(function(){
                $(location).attr('href','B:/3rd 2sem/b2d2/second page/index.html');
             });

          });
         
                 
       