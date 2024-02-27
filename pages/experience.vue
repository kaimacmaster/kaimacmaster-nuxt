<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-8xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl lg:mx-0">
        <p class="text-base font-semibold leading-7 text-amber-500">
          Driving Impact and Innovation
        </p>
        <h2
          class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Experience
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-200">
          As a Frontend Lead/Manager with experience in a wide range of sectors,
          I excel in leading dynamic Frontend devs into delivering
          high-performing web interfaces. I value strong teamwork, a
          user-focused mindset, and staying at the forefront of web development.
        </p>
      </div>

      <div v-if="pending">Loading...</div>
      <div v-else-if="error">{{ error.message }}</div>
      <div v-else class="mt-10 space-y-16 pt-10 sm:mt-16 sm:pt-16">
        <ExperienceItem
          v-for="item in data.experience.items"
          :key="item.companyName.toLowerCase().replace(/ /g, '-')"
          :experience-item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ExperienceItem from '~/components/ExperienceItem.vue'

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
