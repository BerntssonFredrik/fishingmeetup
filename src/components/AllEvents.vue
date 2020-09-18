<template>
  <div class="wrapper">
    <SearchField />
    <AddEvent />
  </div>
</template>

<script>
import SearchField from "@/components/SearchField"
import AddEvent from "@/components/AddEvent"
export default {
components: { SearchField, AddEvent}
}
</script>

<style scoped>
.wrapper {
    height: 20vh;
}
</style>