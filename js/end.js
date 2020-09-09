class End{
    constructor(){}
    display(){
         
         if(score==105){
            console.log("ERROR");
            var success = createElement("h3")
         success.html("Congratulations! Your digital life is safe and secured!");
         success.position(width/2-700, height/2+90)
         success.style("fontSize","20px")
        


         }
         if(score ==! 105){
            var failed = createElement("h3")
            failed.html("Oh no! Your digital life is ruined!")
         success.position(width/2-700,height/2+90)

        

         }
        
    }
}