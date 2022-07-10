<template>
  <div class="user" @click="onClick" :class="{selected:selected}">
    <div class="description">
      <div class="name">
        {{ user.username }} {{ user.self ? " (yourself)" : "" }}
      </div>
      <div class="status">
        <status-icon :connected="user.connected"/>
        {{ status }}
      </div>
    </div>
    <div v-if="user.hasNewMessages" class="new-messages">!</div>
  </div>
</template>

<script>
import StatusIcon from "./StatusIcon"

export default {
  name: "User",
  components: {StatusIcon},
  props: {
    user: Object,
    selected: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("select")
    }
  },
  computed: {
    status() {
      return this.user.connected ? "online" : "offline"
    }
  }
}
</script>

<style scoped>
.selecred{
  backdrop-color: #1164a3;;
}
</style>