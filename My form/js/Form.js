class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('continue');
    //this.greeting = createElement('h2');
  }
  hide(){
   
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Revolutionary Survey");
    title.position(displayWidth/2 -50,0 );
    
    this.input.position(displayWidth/2 -40, displayHeight/2 -40);
    this.button.position(displayWidth/2 +30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      var title=createElement('h1')
      title.html("1.Do you think that there should free food for poor people in our school?");
      title.position(200,200);
      var button1=createButton('yes');
      button1.position(240,300);
      var button2=createButton('no');
      button2.position(240,350);
      
      
      button1.mousePressed(()=>{
      title.hide();
      button2.hide();
      button1.hide();
      var title1 = createElement('h1');
      title1.html("2.Are you willing to contribute for this program every month?");
      title1.position(200,200);
      var button3=createButton('yes');
      button3.position(240,300);
      var button4=createButton('no');
      button4.position(240,350);
        
      button4.mousePressed(()=>{
        title1.hide();
        button3.hide();
        button4.hide();
        var title3 = createElement('h1');
        title3.html("thank you ");
        title3.position(200,200);
       
    })
      
      button3.mousePressed(()=>{
        title1.hide();
        button3.hide();
        button4.hide();
        var title2 = createElement('h1');
        title2.html("3.How much are you willing to contribute?");
        title2.position(200,200);
        var button7=createButton('below 500');
        button7.position(240,300);
        var button8=createButton('above 500');
        button8.position(240,350);
        button7.mousePressed(()=>{
          title2.hide();
          button7.hide();
          button8.hide();
          var title3 = createElement('h1');
          title3.html("thank you ");
          title3.position(200,200);
        })
        button8.mousePressed(()=>{
          title2.hide();
          button7.hide();
          button8.hide();
          var title3 = createElement('h1');
          title3.html("thank you ");
          title3.position(200,200);
        })
      })
      })

      button2.mousePressed(()=>{
        title.hide();
        button2.hide();
        button1.hide();
        var title2 = createElement('h1');
      title2.html("2.Are you atleast willing to contribute for this program every month?");
      title2.position(200,200);
      var button5=createButton('yes');
      button5.position(240,300);
      var button6=createButton('no');
      button6.position(240,350);


      button5.mousePressed(()=>{
        title2.hide();
        button5.hide();
        button6.hide();
        var title4 = createElement('h1');
        title4.html("3.How much are you willing to contribute?");
        title4.position(200,200);
        var button7=createButton('below 500');
        button7.position(240,300);
        var button8=createButton('above 500');
        button8.position(240,350);
        
        button7.mousePressed(()=>{
          title4.hide();
          button7.hide();
          button8.hide();
          var title3 = createElement('h1');
          title3.html("thank you ");
          title3.position(200,200);
        })
        button8.mousePressed(()=>{
          title4.hide();
          button7.hide();
          button8.hide();
          var title3 = createElement('h1');
          title3.html("thank you ");
          title3.position(200,200);
        }) 
      })


        button6.mousePressed(()=>{
          title2.hide();
          button5.hide();
          button6.hide();
          var title3 = createElement('h1');
          title3.html("thank you ");
          title3.position(200,200);
          
          })
      })
        })
      
      
    };

  }

