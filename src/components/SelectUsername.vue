<template>
  <div class="select-username">
    <form @submit.prevent="onsubmit">
      <input v-model="username" placeholder="your username..."/>
      <button :disabled="!isValid">send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SelectedUsername",
  data() {
    return {
      username: "",
    }
  },
  computed: {
    isValid() {
      return this.username.length > 2;
    }
  },
  methods: {
    onSubmit() {
      this.$emit('input', this.username)
    }
  }
}
</script>

<style scoped>
.select-username {
  width: 300px;
  margin: 200px auto 0;
}
</style>