<template>
  <section class="hero">
    <div class="container hero-container">
      <!-- LEFT -->
      <div class="hero-content">
        <h1 class="hero-title">
          {{ $t("hero.title") }}
          <span>{{ $t("hero.title-yellow") }}</span>
        </h1>

        <p class="hero-text">
          {{ $t("hero.subtitle") }}
        </p>

        <div class="hero-actions">
          <button class="btn btn--solid">{{ $t("hero.start") }}</button>
          <button class="btn btn--outline">{{ $t("hero.kurs") }}</button>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="hero-visual">
        <!-- SVG PROCESS -->
       

        <!-- IMAGE -->
        <div class="image-box">
          <img
            src="@/assets/images/heroImg.png"
            alt="Teacher"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
};
</script>

<style scoped>
/* === BASE === */
.hero {
  position: relative;
  padding: 60px 0 0px;
  overflow: hidden;
}

/* BLUR BACKGROUND */
.hero::after {
  content: "";
  position: absolute;
  right: 80px;
  top: 100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 0.35),
    rgba(255, 140, 0, 0.05),
    transparent
  );
  filter: blur(40px);
}

.hero-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

/* === TEXT === */
.hero-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  animation: fadeUp 0.9s ease forwards;
}

.hero-title span {
  display: block;
  color: #ff8c00;
}

.hero-text {
  margin-top: 20px;
  font-size: 18px;
  color: #555;
  animation: fadeUp 0.9s ease forwards;
  animation-delay: 0.15s;
}

.hero-actions {
  margin-top: 32px;
  display: flex;
  gap: 16px;
  animation: fadeUp 0.9s ease forwards;
  animation-delay: 0.3s;
}

/* === BUTTONS === */
.btn {
  padding: 12px 26px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--solid {
  background: #ff8c00;
  color: #fff;
  border: none;
}

.btn--solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 140, 0, 0.35);
}

.btn--outline {
  background: transparent;
  border: 2px solid #ff8c00;
  color: #ff8c00;
}

.btn--outline:hover {
  background: #ff8c00;
  color: #fff;
}

/* === RIGHT SIDE === */
.hero-visual {
  position: relative;
  animation: fadeRight 1s ease forwards;
}

/* IMAGE */
.image-box {
  width: 360px;
  margin: auto;
}

.image-box img {
  width: 100%;
  animation: float 4s ease-in-out infinite;
}

/* === SVG PROCESS === */
.process-svg {
  position: absolute;
  top: -40px;
  left: -60px;
  width: 420px;
}

.process-line {
  stroke: #ff8c00;
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: drawLine 2s ease forwards;
}

.process-dot {
  fill: #ff8c00;
  opacity: 0;
  animation: dotFade 0.4s ease forwards;
}

.d1 { animation-delay: 0.4s; }
.d2 { animation-delay: 0.8s; }
.d3 { animation-delay: 1.2s; }
.d4 { animation-delay: 1.6s; }

.process-svg text {
  font-size: 12px;
  fill: #333;
  opacity: 0;
  animation: fadeUp 0.5s ease forwards;
  animation-delay: 1.8s;
}

/* === ANIMATIONS === */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}

@keyframes dotFade {
  to { opacity: 1; }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* === RESPONSIVE === */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .process-svg {
    display: none;
  }
}
</style>
