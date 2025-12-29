<template>
  <section class="courses">
    <div class="container">
      <h2 class="section-title">Bizning kurslar</h2>

      <div class="courses-row">
        <div
          v-for="course in courses"
          :key="course.id"
          class="course-card"
        >
          <h3>{{ course.title }}</h3>
          <p>{{ course.desc }}</p>
          <span>▶ Videodarslar</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CoursesSlider",
  data() {
    return {
      courses: [
        { id: 1, title: "Frontend", desc: "HTML, CSS, JS, Vue" },
        { id: 2, title: "Backend", desc: "Node.js, API, DB" },
        { id: 3, title: "IELTS", desc: "Listening, Reading, Writing" },
        { id: 4, title: "Kimyo", desc: "Test va amaliyot" },
        { id: 5, title: "Matematika", desc: "Abituriyentlar uchun" },
      ],
    };
  },
};
</script>

<style scoped>
.courses {
  padding: 80px 0;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 32px;
  color: var(--text-primary);
}

.courses-row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.course-card {
  min-width: 260px;
  padding: 24px;
  border-radius: 20px;
  background: var(--bg-surface);
  box-shadow: var(--shadow-sm);
}

.course-card h3 {
  color: var(--primary-500);
  margin-bottom: 8px;
}

.course-card p {
  color: var(--text-secondary);
}

.course-card span {
  margin-top: 16px;
  display: inline-block;
  font-weight: 600;
  color: var(--text-muted);
}
</style>
