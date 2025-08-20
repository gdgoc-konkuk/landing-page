export class Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  speed = 0.02;
  moveRadius = 50;
  influenceRadius = 200;
  timeOffset: number;
  moveSpeedX: number;
  moveSpeedY: number;

  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.targetX = x;
    this.targetY = y;
    this.radius = radius;
    this.color = color;

    this.timeOffset = Math.random() * Math.PI * 2;
    this.moveSpeedX = 0.3 + Math.random() * 0.4; // 0.3 ~ 0.7
    this.moveSpeedY = 0.2 + Math.random() * 0.4; // 0.2 ~ 0.6
  }

  update(mouseX: number, mouseY: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let finalTargetX, finalTargetY;

    if (distance < this.influenceRadius) {
      finalTargetX = mouseX;
      finalTargetY = mouseY;
    } else {
      const time = Date.now() * 0.001;
      finalTargetX =
        this.baseX +
        Math.cos(time * this.moveSpeedX + this.timeOffset) * this.moveRadius;
      finalTargetY =
        this.baseY +
        Math.sin(time * this.moveSpeedY + this.timeOffset * 1.5) *
          this.moveRadius;
    }

    this.targetX = finalTargetX;
    this.targetY = finalTargetY;

    this.x += (this.targetX - this.x) * this.speed;
    this.y += (this.targetY - this.y) * this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
