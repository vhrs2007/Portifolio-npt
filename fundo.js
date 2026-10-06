// Fundo animado de tecnologia: grade, rede de partículas e riscos de luz
(() => {
  const canvas = document.createElement("canvas");
  canvas.className = "fundo-animado";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  const reduzirMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DIST = 140;          // distância máxima para ligar dois pontos
  const GRADE = 64;          // espaçamento da grade
  let w, h, dpr, pontos = [], riscos = [];
  const mouse = { x: -9999, y: -9999 };

  function redimensionar() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth;
    h = innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const qtd = Math.min(150, Math.round((w * h) / 11000));
    pontos = Array.from({ length: qtd }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
      brilho: Math.random(),
    }));
    riscos = Array.from({ length: 7 }, () => novoRisco(true));
  }

  function novoRisco(inicio) {
    const paraDireita = Math.random() < 0.5;
    const comp = 120 + Math.random() * 320;
    return {
      y: Math.random() * h,
      x: inicio ? Math.random() * w : paraDireita ? -comp : w + comp,
      comp,
      vel: (2 + Math.random() * 5) * (paraDireita ? 1 : -1),
      esp: Math.random() * 2 + 0.8,
      alfa: 0.35 + Math.random() * 0.5,
    };
  }

  function desenharFundo() {
    const g = ctx.createRadialGradient(w * 0.55, h * 0.45, 0, w * 0.55, h * 0.45, Math.max(w, h) * 0.8);
    g.addColorStop(0, "#0b2a5e");
    g.addColorStop(0.5, "#061a3d");
    g.addColorStop(1, "#020a1c");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // grade
    ctx.strokeStyle = "rgba(90, 160, 255, 0.05)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= w; x += GRADE) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); }
    for (let y = 0; y <= h; y += GRADE) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
    ctx.stroke();
  }

  function desenharRiscos() {
    ctx.globalCompositeOperation = "lighter";
    riscos.forEach((r, i) => {
      if (!reduzirMovimento) r.x += r.vel;
      const cauda = r.vel > 0 ? r.x - r.comp : r.x + r.comp;
      const g = ctx.createLinearGradient(cauda, 0, r.x, 0);
      g.addColorStop(0, "rgba(60, 160, 255, 0)");
      g.addColorStop(0.8, `rgba(90, 190, 255, ${r.alfa * 0.6})`);
      g.addColorStop(1, `rgba(235, 248, 255, ${r.alfa})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = r.esp;
      ctx.shadowColor = "rgba(80, 180, 255, 0.9)";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(cauda, r.y);
      ctx.lineTo(r.x, r.y);
      ctx.stroke();
      if ((r.vel > 0 && cauda > w) || (r.vel < 0 && cauda < 0)) riscos[i] = novoRisco(false);
    });
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
  }

  function desenharRede(t) {
    // linhas
    for (let i = 0; i < pontos.length; i++) {
      const a = pontos[i];
      for (let j = i + 1; j < pontos.length; j++) {
        const b = pontos[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < DIST * DIST) {
          ctx.strokeStyle = `rgba(120, 180, 255, ${(1 - Math.sqrt(d2) / DIST) * 0.28})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      // ligação com o mouse
      const mx = a.x - mouse.x, my = a.y - mouse.y;
      const md = Math.sqrt(mx * mx + my * my);
      if (md < DIST * 1.4) {
        ctx.strokeStyle = `rgba(200, 230, 255, ${(1 - md / (DIST * 1.4)) * 0.45})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
    // pontos
    pontos.forEach((p) => {
      const pisca = 0.55 + 0.45 * Math.sin(t / 900 + p.brilho * 10);
      ctx.fillStyle = p.brilho > 0.75 ? `rgba(255, 255, 255, ${pisca})` : `rgba(140, 200, 255, ${pisca * 0.85})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function mover() {
    pontos.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;
    });
  }

  function quadro(t = 0) {
    desenharFundo();
    desenharRiscos();
    desenharRede(t);
    if (!reduzirMovimento) {
      mover();
      requestAnimationFrame(quadro);
    }
  }

  addEventListener("resize", () => { redimensionar(); if (reduzirMovimento) quadro(); });
  addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });

  redimensionar();
  quadro();
})();
