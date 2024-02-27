<template>
  <article
    class="flex flex-col items-start justify-between max-w-3xl"
  >
    <div class="flex items-center gap-x-2 text-xs">
      <time class="text-gray-500"><span class="text-gray-300">{{ duration }}</span> ({{ dates }})</time>
    </div>
    <div class="group relative">
      <h3 class="mt-3 text-xl font-semibold text-amber-500">
        <span class="absolute inset-0" />
        {{ experienceItem.companyName }} <span class="text-lg text-amber-800 pl-1">{{ experienceItem.jobTitle }}</span>
      </h3>
      <p class="mt-5 text-sm leading-6 text-gray-300  whitespace-pre-line">
        {{ experienceItem.description.trim() }}
      </p>
    </div>
  </article>
</template>

<script setup>
const { experienceItem } = defineProps({
  experienceItem: {
    type: Object,
    required: true,
  },
})

const formatDate = (date) =>
  date
    ? date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short' })
    : 'Present'

const calculateDuration = (startDate, endDate) => {
  endDate = endDate || new Date()
  const diff = (endDate.getTime() - startDate.getTime()) / 1000
  const totalMonths = Math.abs(Math.round(diff / (60 * 60 * 24 * 7 * 4)))

  if (totalMonths < 12) {
    return `${totalMonths} months`
  }
  return `${Math.floor(totalMonths / 12)} yrs, ${totalMonths % 12} mths`
}

const startDate = computed(() =>
  experienceItem.startDate ? new Date(experienceItem.startDate) : null,
)
const leaveDate = computed(() =>
  experienceItem.leaveDate ? new Date(experienceItem.leaveDate) : null,
)
const dates = computed(
  () => `${formatDate(startDate.value)} - ${formatDate(leaveDate.value)}`,
)
const duration = computed(() =>
  calculateDuration(startDate.value, leaveDate.value),
)
</script>
