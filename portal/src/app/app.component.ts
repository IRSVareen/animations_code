import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  @ViewChild('imgContainer') imgContainer!: ElementRef
  countEjected = 0
  countRejected = 0

  constructor(private renderer: Renderer2){}
  ejectedCount(){
    const img = this.renderer.createElement("img")
    this.renderer.setAttribute(img,"src","/assets/bottle.png")
    this.renderer.addClass(img,"img")
    
    
    const remeoveImg=()=>{
      this.renderer.removeChild(this.imgContainer.nativeElement,img)
    }
    this.renderer.listen(img,'animationend', remeoveImg)
    this.renderer.appendChild(this.imgContainer.nativeElement, img)
    this.countEjected += 10
  }

  rejectedCount(){
    const img2 = this.renderer.createElement("img")
    this.renderer.setAttribute(img2,"src","/assets/bottle.png")
    this.renderer.addClass(img2,"img2")
    
    
    const remeoveImg2=()=>{
      this.renderer.removeChild(this.imgContainer.nativeElement,img2)
    }
    this.renderer.listen(img2,'animationend', remeoveImg2)
    this.renderer.appendChild(this.imgContainer.nativeElement, img2)
    this.countRejected += 10
  }

}
