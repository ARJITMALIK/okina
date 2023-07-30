import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('cnvs', { static: true }) mainCnvs!: ElementRef;
  title = 'okina';

  public CANVAS_WIDTH: number = 600;
  public CANVAS_HEIGHT: number = 600;

  public frameX: number = 0;
  public frameY: number = 0;

  public spriteWidth: number = 300;
  public spriteHeight: number = 300;

  public gameFrame: number = 0;
  public staggerFrame: number = 7;

  public playerImg: HTMLImageElement = new Image();

  public ctx!: CanvasRenderingContext2D;
  ngOnInit(): void {
    const canvas = this.mainCnvs.nativeElement;
    canvas.width = this.CANVAS_WIDTH;
    canvas.height = this.CANVAS_HEIGHT;
    this.ctx = canvas.getContext('2d');
    this.playerImg.src = '../assets/spritesheets/shinobi_spritesheet.png';
    this.playerImg.onload = () => {
      this.animate();
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    this.ctx.drawImage(
      this.playerImg,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      100,
      200,
      this.spriteWidth,
      this.spriteHeight
    );
    if (this.gameFrame % this.staggerFrame === 0) {
      if (this.frameX < 3) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    }
    this.gameFrame++;
    requestAnimationFrame(this.animate.bind(this));
  }
}
