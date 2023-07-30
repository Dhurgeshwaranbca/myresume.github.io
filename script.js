        document.getElementById("inside").hidden = true;
        $(document).ready(function(){
            $("#about").hover(function(){
                document.getElementById("inside").hidden = false;
                document.getElementById("inside").innerHTML = "Hello there! My Name is Dhurgeshwaran. Im a indi App, Game and Web Developer. I like to Make new things like Robot and some other projects. I choose Programming lang in my college because my soul like it.😉";
            
            }, function(){
                document.getElementById("inside").hidden = true;
                
                });
        });