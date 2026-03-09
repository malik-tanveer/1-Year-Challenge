import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js",
  "React Native", "Next.js", "Node.js", "Express.js", "MongoDB",
  "MySQL", "Firebase", "PHP", "Java", "Tailwind CSS",
  "Sass", "Bootstrap", "Postman", "Git & GitHub", "Figma",
];

const databases = ["MongoDB", "MySQL", "SQLite3"];

export default function About() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const cardsRef = useRef(null);
  const skillsRef = useRef(null);
  const lineRef = useRef(null);

  // ── Three.js background ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 5;

    // Floating particles
    const count = 320;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 2.5 + 0.5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Glowing grid lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0f4c75, transparent: true, opacity: 0.18 });
    for (let i = -5; i <= 5; i++) {
      const hGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-9, i * 1.5, -2),
        new THREE.Vector3(9, i * 1.5, -2),
      ]);
      const vGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i * 1.8, -8, -2),
        new THREE.Vector3(i * 1.8, 8, -2),
      ]);
      scene.add(new THREE.Line(hGeo, lineMat));
      scene.add(new THREE.Line(vGeo, lineMat));
    }

    // Resize
    const onResize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Mouse parallax
    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      particles.rotation.y += 0.0006;
      particles.rotation.x += 0.0002;
      camera.position.x += (mx * 0.3 - camera.position.x) * 0.04;
      camera.position.y += (my * 0.2 - camera.position.y) * 0.04;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      renderer.dispose();
    };
  }, []);

  // ── GSAP scroll animations ────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading chars split
      const heading = headingRef.current;
      const text = heading.innerText;
      heading.innerHTML = text
        .split("")
        .map((c) => `<span class="char" style="display:inline-block">${c === " " ? "&nbsp;" : c}</span>`)
        .join("");

      gsap.from(".char", {
        scrollTrigger: { trigger: heading, start: "top 85%" },
        y: 80,
        opacity: 0,
        rotateX: -90,
        stagger: 0.035,
        duration: 0.7,
        ease: "back.out(1.7)",
      });

      // Bio fade
      gsap.from(bioRef.current, {
        scrollTrigger: { trigger: bioRef.current, start: "top 88%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Line expand
      gsap.from(lineRef.current, {
        scrollTrigger: { trigger: lineRef.current, start: "top 90%" },
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "power4.out",
      });

      // Cards stagger
      gsap.from(".about-card", {
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // Skills stagger
      gsap.from(".skill-tag", {
        scrollTrigger: { trigger: skillsRef.current, start: "top 88%" },
        scale: 0.6,
        opacity: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: "back.out(2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#020c18] overflow-hidden py-24 px-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Syne:wght@700;800&display=swap');
        .about-title { font-family: 'Syne', sans-serif; }
        .skill-tag:hover { background: rgba(56,189,248,0.15); border-color: #38bdf8; color: #e0f2fe; transform: translateY(-2px); }
        .about-card:hover { border-color: rgba(56,189,248,0.4); box-shadow: 0 0 30px rgba(56,189,248,0.08); }
        .glow-dot { box-shadow: 0 0 8px #38bdf8, 0 0 20px rgba(56,189,248,0.4); }
      `}</style>

      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(14,80,140,0.18) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="glow-dot w-2 h-2 rounded-full bg-sky-400 inline-block" />
          <span className="text-sky-400 text-xs tracking-[0.3em] uppercase font-medium">About Me</span>
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="about-title text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
          style={{ perspective: "800px" }}
        >
          Hi, I'm Tanveer
        </h2>

        {/* Divider line */}
        <div
          ref={lineRef}
          className="h-px bg-gradient-to-r from-sky-400 via-sky-600 to-transparent mb-8"
          style={{ width: "340px" }}
        />

        {/* Bio */}
        <p
          ref={bioRef}
          className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-16"
          style={{ fontWeight: 300 }}
        >
          Passionate about building{" "}
          <span className="text-sky-400 font-medium">high-performance web apps</span> with modern
          technologies — crafting interactive UIs, designing scalable backends.{" "}
          <span className="text-sky-400 font-medium">React, Node.js, and MongoDB</span> are my playground.
        </p>

        {/* Cards row */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {/* Who I am */}
          <div
            className="about-card rounded-2xl p-7 border border-white/5 transition-all duration-300"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sky-400 text-xl">⚡</span>
              <h3 className="about-title text-white font-bold text-lg">Who I Am</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A passionate <span className="text-white font-medium">Full Stack MERN Developer</span> who
              loves turning complex problems into elegant, scalable solutions. From stunning interfaces to
              secure backends, I deliver impactful web experiences that blend{" "}
              <span className="text-sky-400">creativity and technology</span>.
            </p>
          </div>

          {/* Core expertise */}
          <div
            className="about-card rounded-2xl p-7 border border-white/5 transition-all duration-300"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sky-400 text-xl">🛠</span>
              <h3 className="about-title text-white font-bold text-lg">Core Expertise</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building <span className="text-white font-medium">responsive UIs</span>, real-time APIs,
              authentication systems, and RESTful services. Focused on{" "}
              <span className="text-sky-400">performance, security, and clean code</span> using modern tech.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {databases.map((db) => (
                <span
                  key={db}
                  className="skill-tag text-xs px-3 py-1 rounded-full border border-sky-400/30 text-sky-300 transition-all duration-200 cursor-default"
                  style={{ background: "rgba(56,189,248,0.07)" }}
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef}>
          <div className="flex items-center gap-3 mb-6">
            <span className="glow-dot w-2 h-2 rounded-full bg-sky-400 inline-block" />
            <span className="text-sky-400 text-xs tracking-[0.3em] uppercase font-medium">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag text-sm px-4 py-2 rounded-full border border-white/10 text-slate-300 transition-all duration-200 cursor-default"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}