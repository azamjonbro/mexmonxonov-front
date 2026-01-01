<template>
  <header class="navbar">
    <nav class="container nav-container">
      <!-- LOGO -->
      <router-link to="/" class="brand">
        <img src="../assets/images/edit.png" alt="logo" class="brand__img" />
      </router-link>

      <!-- LINKS -->
      <ul class="nav-links" :class="{ 'is-open': menuOpen }">
        <li>
          <router-link to="/" class="nav-link" @click="closeMenu">
            {{ $t("home") }}
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" @click="closeMenu">
            {{ $t("about") }}
          </router-link>
        </li>
        <li>
          <router-link to="/services" class="nav-link" @click="closeMenu">
            {{ $t("services") }}
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link" @click="closeMenu">
            {{ $t("contact") }}
          </router-link>
        </li>
      </ul>

      <!-- ACTIONS -->
      <div class="actions">
        <div class="darkmode">
          <button class="theme-btn" @click="toggleTheme">
            <span v-if="theme === 'light'">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
        <!-- LANG -->
        <div class="lang" @click.stop>
          <button class="lang-btn" @click="toggleLang">
            {{ $i18n.locale.toUpperCase() }}
            <span class="arrow"></span>
          </button>

          <ul v-if="langOpen" class="lang-menu">
            <li @click="changeLang('uz')">{{ $t("language.uz") }}</li>
            <li @click="changeLang('en')">{{ $t("language.en") }}</li>
            <li @click="changeLang('ru')">{{ $t("language.ru") }}</li>
          </ul>
        </div>

        <!-- DARK MODE -->
        

        <!-- AUTH -->
        <button class="btn btn--ghost nav-btn">
          {{ $t("login") }}
        </button>
        <button class="btn btn--solid nav-btn">
          {{ $t("signup") }}
        </button>


      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      langOpen: false,
      currentLang: localStorage.getItem("lang") || "uz",
      theme: localStorage.getItem("theme") || "light",
    };
  },
  mounted() {
    document.addEventListener("click", this.closeLang);
    this.applyTheme(this.theme);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeLang);
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;
    },
    toggleLang() {
      this.langOpen = !this.langOpen;
    },
    closeLang() {
      this.langOpen = false;
    },
    changeLang(lang) {
      this.$i18n.locale  = lang;
      localStorage.setItem("lang", lang);
      this.langOpen = false;
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      this.applyTheme(this.theme);
    },

    applyTheme(theme) {
      const root = document.documentElement;

      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    },
  },
};
</script>

<style>
/* ================= BASE ================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;

  /* glass bg: root ranglardan */
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--bg-main) 35%, transparent),
    color-mix(in srgb, var(--bg-main) 18%, transparent)
  );

  backdrop-filter: blur(14px);
  border-bottom: 1px solid
    color-mix(in srgb, var(--border-default) 55%, transparent);
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 16px;
}
.brand__img {
  height: 60px;
}
/* ================= NAV LINKS ================= */
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* ================= LINKS ================= */
.nav-link {
  position: relative;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  padding: 6px 0;
  opacity: 0.75;
  transition: opacity var(--transition-fast);
}

/* underline hover */
.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 0;
  height: 2px;

  background: var(--primary-500);
  border-radius: 10px;
  transform: translateX(-50%);
  transition: width var(--transition-normal);
}

.nav-link:hover {
  opacity: 1;
}

.nav-link:hover::after {
  width: 100%;
}

/* active page */
.nav-link.router-link-active {
  opacity: 1;
}

.nav-link.router-link-active::after {
  width: 100%;
  background: var(--primary-500);
}

/* ================= BUTTONS ================= */
.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.btn {
  padding: 9px 16px;
  border-radius: 14px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.btn--ghost {
  background: color-mix(in srgb, var(--bg-main) 18%, transparent);
  color: var(--text-primary);
  border: 1px solid color-mix(in srgb, var(--border-default) 70%, transparent);
}

.btn--ghost:hover {
  background: color-mix(in srgb, var(--bg-main) 28%, transparent);
  border-color: color-mix(in srgb, var(--border-default) 85%, transparent);
}

.btn--solid {
  background: var(--primary-500);
  color: var(--text-invert);
  box-shadow: var(--shadow-sm);
}

.btn--solid:hover {
  background: var(--primary-600);
}

.btn--solid:active {
  background: var(--primary-700);
}

/* ================= LANG ================= */
.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;

  background: color-mix(in srgb, var(--bg-main) 18%, transparent);
  border: 1px solid color-mix(in srgb, var(--border-default) 70%, transparent);
  border-radius: 12px;

  color: var(--text-primary);
  cursor: pointer;
  font-weight: 600;
  transition: background var(--transition-fast),
    border-color var(--transition-fast);
}

.lang-btn:hover {
  background: color-mix(in srgb, var(--bg-main) 28%, transparent);
  border-color: color-mix(in srgb, var(--border-default) 90%, transparent);
}

.arrow {
  width: 6px;
  height: 6px;
  border-right: 2px solid var(--text-primary);
  border-bottom: 2px solid var(--text-primary);
  transform: rotate(45deg);
}

/* dropdown */
.lang {
  position: relative;
}
.lang-menu {
  position: absolute;
  right: -100%;
  top: calc(100% + 25px);
  background: color-mix(in srgb, var(--bg-main) 100%, transparent);
  backdrop-filter: blur(16px);

  border: 1px solid color-mix(in srgb, var(--border-default) 60%, transparent);
  border-radius: 14px;

  list-style: none;
  padding: 6px;
  min-width: 150px;

  box-shadow: var(--shadow-lg);
}

.lang-menu li {
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--text-primary);
  transition: background var(--transition-fast);
}

.lang-menu li:hover {
  background: color-mix(in srgb, var(--bg-surface) 100%, transparent);
}

/* ================= BURGER ================= */
.burger span {
  width: 26px;
  height: 2px;
  background: var(--text-primary);
}

/* ================= OVERLAY ================= */
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

/* ================= MOBILE ================= */

@media (max-width: 768px) {

  /* BURGER */
  .burger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
  }

  /* BOTTOM NAV */
  .nav-links {
    position: fixed !important;

    bottom: -88.5vh; /* 👈 PASTGA YOPISHDI */
    left: 50%;
    transform: translateX(-50%);
    
    background: color-mix(in srgb, var(--bg-main) 95%, transparent);
    border: 1px solid color-mix(in srgb, var(--border-default) 60%, transparent);
    backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0,0,0,.6);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 56px;
    border-radius: 28px;
    z-index: 100;
  }

  .nav-links li {
    list-style: none;
  }

  /* MATNNI YASHIRAMIZ */
  .nav-link {
    font-size: 0;
    position: relative;
    width: 24px;
    height: 24px;
    display: inline-block;
  }

  /* HOME */
  .nav-links li:nth-child(1) .nav-link::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url("@/assets/icons/home.svg") no-repeat center/contain;
  }

  /* ABOUT */
  .nav-links li:nth-child(2) .nav-link::after {
    content: "";
    position: absolute;
    inset: 0;
    /* background: url("@/assets/icons/info.svg") no-repeat center/contain; */
  }

  /* SERVICES */
  .nav-links li:nth-child(3) .nav-link::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url("@/assets/icons/ranking.svg") no-repeat center/contain;
  }

  /* CONTACT */
  .nav-links li:nth-child(4) .nav-link::after {
    content: "";
    position: absolute;
    inset: 0;
    /* background: url("@/assets/icons/contact.svg") no-repeat center/contain; */
  }
  .nav-link::after{
    width: 24px;
    height: 24px;
  }
}
@media(max-width:480px){
  .nav-btn{
    display: none;
  }
  .lang-menu{
    position: absolute;
    right: 0%;
  }
}

</style>
