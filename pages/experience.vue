<template>
  <div class="page">
    <h1>Experience</h1>
    <div v-for="(item, index) in experienceItems" :key="index">
      <ExperienceItem :experience-item="item" />
    </div>
  </div>
</template>

<script>
import getData from '~/data/utils/contentful-request'
import experienceItemCollection from '~/data/queries/experienceItemCollection.graphql'

const ExperienceItem = () => import('~/components/ExperienceItem')

export default {
  name: 'experience',
  transition: 'page',
  components: { ExperienceItem },
  async asyncData(context) {
    return {
      experienceItems: await getData(
        context,
        experienceItemCollection,
        'experienceItemCollection'
      ),
    }
  },
}
</script>
