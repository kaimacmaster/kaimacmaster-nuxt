<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-8xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl lg:mx-0">
        <p class="text-base font-semibold leading-7 text-amber-500">
          My thoughts
        </p>
        <h2
          class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Blog
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-200">
          I aim to share my adventures as a work-from-home lead dev, dad,
          husband, student of languages, entrepreneur, and gaming enthusiast.
        </p>
      </div>

      <div class="mt-10 space-y-16 pt-10 sm:mt-16 sm:pt-16">
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex max-w-xl flex-col items-start justify-between"
        >
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{
              post.date
            }}</time>
            <span
              class="relative z-10 rounded-full bg-zinc-800 px-3 py-1.5 font-medium text-gray-400"
            >
              {{ post.category.title }}
            </span>
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-amber-500"
            >
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
              {{ post.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExperienceItem from '~/components/ExperienceItem.vue'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]
</script>
