import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from "@angular/core"

@Component({
  selector:'progress-bar',
  template:`
  <div class="progress-bar-container"
  [style.backgroundColor]="backgroundColor"
  >
    <div 
      class="progress"
      [style]="{
        backgroundColor : progressColor,
        width : progress +'%'
      }"
      ></div>
  `,
  styles:[
    `
      .progress-bar-container ,
      .progress{
        height:20px;
      }

      .progress-bar-container{
        width:100%;
      }
      `
  ]
})


export class ProgressBarComponent implements OnInit, OnChanges{
  @Input () set progress(val : number){
        this._progress=val;
  };
  private _progress=50;
  get progress(){
    return this._progress
  }
  @Input () backgroundColor= '#ccc';
  @Input () progressColor='tomato';

  constructor(){
    
  }

  ngOnInit(){
    console.log('onInit',{
      progress: this.progress,
      backgroundColor : this.backgroundColor,
      progressColor: this.progressColor,
    })
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('changes',{
      progress: this.progress,
      backgroundColor : this.backgroundColor,
      progressColor: this.progressColor,
    })
  }

}