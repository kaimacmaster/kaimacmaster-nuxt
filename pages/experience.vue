<template>
  <div class="page">
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="text-base font-semibold leading-7 text-amber-500">
            What have I been up to?
          </p>
          <h2
            class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Experience
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-200">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>

        <div v-if="pending">Loading...</div>
        <div v-else-if="error">{{ error.message }}</div>
        <div
          v-else
          class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"
        >
          <article
            v-for="item in data.experience.items"
            :key="item.companyName.toLowerCase().replace(/ /g, '-')"
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <div class="flex items-center gap-x-4 text-xs">
              <time class="text-gray-500"> post.date </time>
              <p
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                post.category.title
              </p>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-amber-500">
                <span class="absolute inset-0" />
                {{ item.companyName }}
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-300 prose">
                {{ item.description }}
              </p>
            </div>
          </article>
          <!-- <ExperienceItem :experience-item="item" /> -->
        </div>
      </div>
    </div>

    <!-- <pre><code>{{ JSON.stringify(data, null, 2) }}</code></pre> -->
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
