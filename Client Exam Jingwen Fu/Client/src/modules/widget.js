import { inject } from 'aurelia-framework';
import { widget } from '../resources/data/widget-object';

@inject(Widget)
export class Widget {
     constructor(Widget) {
            this.Widget=widget;
            this.isCheckedCompleted = true;
          }
        
  async attached(){
    await this.getWidget();
  }

  async getWidget(){
    await this.widget.getWidget();
    this.showForm = false;
  }
  
  updateWidget(widget){
    this.widget.selectedWidget = widget;
    this.saveWidget();
  }
  
  newWidget(){
   this.widget.newWidget();
   this.showForm = true;
 }
   
 editWidget(widget){
  this.widget.selectedWidget = widget;
  this.showForm = true;
}

async saveWidget(){
  await this.widget.saveWidget()
}

async deleteWidget(){
  await this.widget.saveWidget()
}
            
Cancel(){
 this.showForm = false;
 }
            
}