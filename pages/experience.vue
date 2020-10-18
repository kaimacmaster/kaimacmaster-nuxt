<template>
  <div class="page">
    <h1>Experience</h1>
    <div v-for="(item, index) in experienceItems" :key="index">
      <ExperienceItem :experience-item="item" />
    </div>
  </div>
</template>

<script>
import { getExperienceItems } from '~/data/utils/contentful-request'

const ExperienceItem = () => import('~/components/ExperienceItem')

export default {
  name: 'experience',
  transition: 'page',
  components: { ExperienceItem },
  async asyncData(context) {
    return {
      experienceItems: await getExperienceItems(context),
    }
  },
}
</script>
