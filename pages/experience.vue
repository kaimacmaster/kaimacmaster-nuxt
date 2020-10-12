<template>
  <div class="page">
    <h1>Experience</h1>
    <div v-for="(item, index) in experienceItems" :key="index">
      <ExperienceItem :experience-item="item" />
    </div>
  </div>
</template>

<script>
import experienceItemCollection from '~/data/queries/experienceItemCollection.graphql'

const ExperienceItem = () => import('~/components/ExperienceItem')

export default {
  name: 'experience',
  transition: 'page',
  components: { ExperienceItem },
  async asyncData(context) {
    const { data } = await context.app.apolloProvider.defaultClient.query({
      query: experienceItemCollection,
    })

    return { experienceItems: data?.experienceItemCollection?.items || [] }
  },
}
</script>
