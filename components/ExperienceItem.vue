<template>
  <article>
    <div class="article-header">
      <div>
        <h2 class="title" v-text="experienceItem.companyName" />
        <h3 class="subtitle" v-text="experienceItem.jobTitle" />
      </div>
      <div class="dates">
        <time v-text="duration" />
        <span class="datesText" v-text="dates" />
      </div>
    </div>
    <p class="description" v-text="experienceItem.description" />
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

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

article {
  max-width: 36rem;
  padding: 1rem 0.5rem;
  text-align: left;
  font-size: 0.9rem;

  @media only screen and (min-width: 32.5rem) {
    font-size: 1rem;
  }

  .description {
    padding-top: 0.5rem;
    white-space: pre-wrap;
    font-size: 0.9rem;
  }

  .article-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 0.25rem;
    line-height: 1.33;

    .title {
      font-size: 1.4rem;

      @media only screen and (min-width: 32.5rem) {
        font-size: 1.6rem;
      }
    }

    .subtitle {
      font-size: 1rem;
    }

    .dates {
      position: relative;
      display: inline-block;
      text-align: right;
      font-size: 0.85rem;
      cursor: help;

      @media only screen and (min-width: 32.5rem) {
        font-size: 0.935rem;
      }

      & .datesText {
        transition: all 100ms ease-out;
        visibility: hidden;
        opacity: 0;
        white-space: nowrap;
        width: fit-content;
        bottom: 100%;
        right: 0;
        color: $color-main;
        text-align: center;
        padding: 0.2rem 0;
        border-radius: 6px;
        position: absolute;
      }

      &:hover .datesText {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
