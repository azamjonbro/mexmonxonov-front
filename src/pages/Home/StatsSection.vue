<template>
  <section class="stats">
    <div class="container stats-row">
      <div class="stat">
        <strong>500+</strong>
        <span>O‘quvchilar</span>
      </div>
      <div class="stat">
        <strong>98%</strong>
        <span>Natija</span>
      </div>
      <div class="stat">
        <strong>5 yil</strong>
        <span>Tajriba</span>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "StatsSection" };
</script>

<style scoped>
.stats {
  padding: 60px 0;
  background: var(--bg-muted);
}

.stats-row {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stat strong {
  font-size: 32px;
  color: var(--primary-500);
}

.stat span {
  display: block;
  color: var(--text-secondary);
}
</style>
