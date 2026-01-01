<template>
  <section class="lead-mini">
    <div class="lead-card">
      <h3>{{ $t("lead.title") }}</h3>
      <p>{{ $t("lead.subtitle") }}</p>

      <form @submit.prevent="submitLead">
        <select v-model="form.subject" required>
          <option value="" disabled>
            {{ $t("lead.subject") }}
          </option>
          <option value="math">{{ $t("subjects.math") }}</option>
          <option value="chemistry">{{ $t("subjects.chemistry") }}</option>
          <option value="biology">{{ $t("subjects.biology") }}</option>
          <option value="it">{{ $t("subjects.it") }}</option>
        </select>

        <input
          type="text"
          v-model="form.name"
          :placeholder="$t('lead.name')"
          required
        />

        <input
          type="tel"
          v-model="form.phone"
          :placeholder="$t('lead.phone')"
          required
        />

        <button type="submit" class="btn btn--solid">
          {{ $t("lead.button") }}
        </button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "MiniLeadCard",
  data() {
    return {
      form: {
        subject: "",
        name: "",
        phone: ""
      }
    };
  },
  methods: {
    submitLead() {
      console.log("LEAD DATA:", this.form);

      alert(this.$t("lead.success"));

      this.form = {
        subject: "",
        name: "",
        phone: ""
      };
    }
  }
};
</script>
<style >
.lead-mini {
  display: flex;
}

.lead-card {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 24px;  
  border-radius: 18px;
  background:var(--bg-muted);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.lead-card h3 {
  font-size: 22px;
  color: var(--text-primary);
}

.lead-card p {
  margin: 6px 0 20px;
  font-size: 14px;
  color: var(--text-secondary);
}

form {
  display: flex;
  flex-direction: column;

  gap: 14px;
}

select,
input {
  padding: 12px 14px;
  border-radius: 12px;
    background: var(--input-bg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--input-text);
  outline: none;
}

select:focus,
input:focus {
  border-color: #6366f1;
}



@media (max-width: 768px) {

  button {
    padding: 14px;
    width: 100%;
  }
}
</style>
