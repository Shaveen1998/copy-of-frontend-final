import React, { useEffect, useRef } from 'react';

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const mouseMovedRef = useRef(false);
  const pointerRef = useRef({
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
  });
  const paramsRef = useRef({
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  });

  const trailRef = useRef(new Array(paramsRef.current.pointsNumber).fill(null).map(() => ({
    x: pointerRef.current.x,
    y: pointerRef.current.y,
    dx: 0,
    dy: 0,
  })));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    window.addEventListener("click", handleMouseClick);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    setupCanvas();
    update(0);

    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  const handleMouseClick = (e) => {
    updateMousePosition(e.pageX, e.pageY);
  };

  const handleMouseMove = (e) => {
    mouseMovedRef.current = true;
    updateMousePosition(e.pageX, e.pageY);
  };

  const handleTouchMove = (e) => {
    mouseMovedRef.current = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
  };

  const updateMousePosition = (eX, eY) => {
    pointerRef.current.x = eX;
    pointerRef.current.y = eY;
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const update = (t) => {
    if (!mouseMovedRef.current) {
      pointerRef.current.x = (0.5 + 0.3 * Math.cos(0.002 * t) * (Math.sin(0.005 * t))) * window.innerWidth;
      pointerRef.current.y = (0.5 + 0.2 * (Math.cos(0.005 * t)) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
    }

    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    trailRef.current.forEach((p, pIdx) => {
      const prev = pIdx === 0 ? pointerRef.current : trailRef.current[pIdx - 1];
      const spring = pIdx === 0 ? 0.4 * paramsRef.current.spring : paramsRef.current.spring;
      p.dx += (prev.x - p.x) * spring;
      p.dy += (prev.y - p.y) * spring;
      p.dx *= paramsRef.current.friction;
      p.dy *= paramsRef.current.friction;
      p.x += p.dx;
      p.y += p.dy;
    });

    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);

    for (let i = 1; i < trailRef.current.length - 1; i++) {
      const xc = 0.5 * (trailRef.current[i].x + trailRef.current[i + 1].x);
      const yc = 0.5 * (trailRef.current[i].y + trailRef.current[i + 1].y);
      ctx.quadraticCurveTo(trailRef.current[i].x, trailRef.current[i].y, xc, yc);
      ctx.lineWidth = paramsRef.current.widthFactor * (paramsRef.current.pointsNumber - i);
      ctx.stroke();
    }

    ctx.lineTo(trailRef.current[trailRef.current.length - 1].x, trailRef.current[trailRef.current.length - 1].y);
    ctx.stroke();

    window.requestAnimationFrame(update);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', background: 'transparent' }}
      ></canvas>
    </div>
  );
};

export default InteractiveCanvas;

