<template>
  <div class="page">
    <h1>Experience</h1>

    <!-- <pre><code>{{ JSON.stringify(data, null, 2) }}</code></pre> -->

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <template v-else>
      <div
        v-for="item in data.experience.items"
        :key="item.companyName.toLowerCase().replace(/ /g, '-')"
      >
        <ExperienceItem :experience-item="item" />
      </div>
    </template>
  </div>
</template>

<script setup>
const query = gql`
  query {
    experience: experienceItemCollection(order: [startDate_DESC]) {
      items {
        companyName
        jobTitle
        startDate
        leaveDate
        description
      }
    }
  }
`

const { pending, error, data } = await useAsyncQuery(query)
</script>

<style lang="scss" scoped>
code {
  display: block;
  padding: 1rem;
  text-align: left;
  text-wrap: normal;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
  font-family: 'Courier New', monospace;
}
</style>
