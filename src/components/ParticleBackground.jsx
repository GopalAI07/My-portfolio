import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Deep Space Stars
    const stars = [];
    const starCount = Math.min(Math.floor((width * height) / 8000), 160);
    
    // Cosmic Shooting Stars
    const shootingStars = [];

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = (Math.random() - 0.5) * width * 2;
        this.y = (Math.random() - 0.5) * height * 2;
        this.z = Math.random() * 1000 + 200;
        this.baseSize = Math.random() * 1.5 + 0.5;
        this.colorType = Math.random();
      }

      update(speedMultiplier) {
        this.z -= 0.8 * speedMultiplier;
        if (this.z <= 10) {
          this.reset();
          this.z = 1000;
        }
      }

      draw() {
        const k = 400 / this.z;
        const px = this.x * k + width / 2 + (mouse.x - width / 2) * 0.05 * (1 - this.z / 1000);
        const py = this.y * k + height / 2 + (mouse.y - height / 2) * 0.05 * (1 - this.z / 1000);
        const size = Math.max(0.5, this.baseSize * k);

        if (px < 0 || px > width || py < 0 || py > height) return;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);

        let color = '#00f0ff';
        if (this.colorType > 0.7) color = '#a855f7';
        else if (this.colorType > 0.4) color = '#38bdf8';
        else color = '#ffffff';

        const alpha = Math.min(1, (1000 - this.z) / 700);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = size > 1.2 ? 6 : 0;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * (height / 2);
        this.len = Math.random() * 80 + 40;
        this.speed = Math.random() * 8 + 6;
        this.size = Math.random() * 1.2 + 0.5;
        this.angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1);
        this.active = false;
        this.timer = Math.random() * 200 + 80;
      }

      update() {
        if (!this.active) {
          this.timer--;
          if (this.timer <= 0) {
            this.active = true;
          }
          return;
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x > width || this.y > height) {
          this.reset();
        }
      }

      draw() {
        if (!this.active) return;
        ctx.beginPath();
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, 'rgba(0, 240, 255, 0)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = this.size;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      stars.forEach((star) => {
        star.update(1.2);
        star.draw();
      });

      shootingStars.forEach((sStar) => {
        sStar.update();
        sStar.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
};

export default ParticleBackground;
