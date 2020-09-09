class Beginning {
    constructor() {
        this.title = createElement("h2");
        this.Seasonbutton = createButton("SEASON:1");
        // this.button2 = createButton("Season2");
        //     this.beginbutton = createButton("Begin>")
    }

    display() {
        //1st screen
        
        this.title.html("Welcome to the world of cyber crime!");
        this.title.position(width/2-120, height-550);
        


        this.Seasonbutton.position(width/2, height/2-95);
        this.Seasonbutton.style("backgroundColor","orange");
        this.Seasonbutton.style("fontSize","30px");

        // this.button2.position(450, 400);
        // this.button2.mousePressed(()=>{
        //     form2 = new Form2;
        // })
        this.Seasonbutton.mousePressed(() => {
            this.title.hide();
            this.Seasonbutton.hide();
            

            var insights = createElement("h2");
            insights.html("The time bomb of cyber crime never stops,the hackers are already on the way of hacking you,secure and save your digital life before it turns 0! ");
            insights.position(width/2-700, height/2+60);
            insights.style("fontSize","30px");
            insights.style("color","BLACK");
            
            
            var nextbutton = createButton("Let's Begin>");
            nextbutton.position(width/2-50, height/2-150)
            nextbutton.style("backgroundColor","orange");
        nextbutton.style("fontSize","30px");

            nextbutton.mousePressed(()=>{ 
                insights.hide();
                nextbutton.hide();

            var emailnotification = createElement("h2")
           
            emailnotification.html("A device named Samsang Tablet 101 has logged into your email.Do you recognise this activity?")
            emailnotification.position(width/2-700, height/2+90);
            
            var Yesbutton = createButton("YES")
            Yesbutton.position(width/2-30, height/2-95)
            Yesbutton.style("backgroundColor","green");
        Yesbutton.style("fontSize","20px");

            Yesbutton.mousePressed(() => {
                insights.hide();
                emailnotification.hide();
                Yesbutton.hide();
                Nobutton.hide();
                episode1 = new Episode1();
                episode1.display();
                score=score-5
                
             })

            
            var Nobutton = createButton("NO")
            Nobutton.position(width/2+60, height/2-95)
            Nobutton.style("backgroundColor","green");
            Nobutton.style("fontSize","20px");

            
            Nobutton.mousePressed(() => {
                insights.hide();
                emailnotification.hide();
                Yesbutton.hide();
                Nobutton.hide();
                episode1 = new Episode1();
                episode1.display();
                score=score+10
                
             })
            })
            
            })
            }}