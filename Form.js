class Form
{
    constructor()
    {
        this.que1= createInput()
        this.que2= createInput()
        this.que3= createInput()
        this.submit1 = createButton("Submit")
        this.submit2 = createButton("Submit")
        this.submit3 = createButton("Submit")
    }

    hide(){
        this.que1.hide()
        this.que2.hide()
        this.que3.hide()
        this.submit1.hide()
        this.submit2.hide()
        this.submit3.hide()
    }
    display()
    {
        this.que1.position(100,180)
        this.que1.size(200,20)
        this.submit1.position(180,220)
        this.que2.position(725,180)
        this.que2.size(200,20)
        this.submit2.position(805,220)
        this.que3.position(430,410) 
        this.que3.size(200,20)
        this.submit3.position(510,450)
        this.submit1.mousePressed(()=>{
            playerInput1 = this.que1.value();
          });    
          this.submit2.mousePressed(()=>{
            playerInput2 = this.que2.value();
          });
          this.submit3.mousePressed(()=>{
            playerInput3 = this.que3.value();
          }); 
        
    }
    
  
    
}