<template>
  <article>
    <div class="article-header">
      <div>
        <h2 class="title" v-text="companyName" />
        <h3 class="subtitle" v-text="jobTitle" />
      </div>
      <div class="dates">
        <p v-text="dates" />
      </div>
    </div>
    <p v-text="description" />
  </article>
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: {
    experienceItem: {
      type: Object,
      default: () => ({
        companyName: '',
        jobTitle: '',
        startDate: null,
        leaveDate: null,
        description: '',
      }),
    },
  },
  computed: {
    companyName() {
      return this.experienceItem && this.experienceItem.companyName
    },
    jobTitle() {
      return this.experienceItem && this.experienceItem.jobTitle
    },
    description() {
      return this.experienceItem && this.experienceItem.description
    },
    startDate() {
      const startDate = this.experienceItem && this.experienceItem.startDate
      return startDate && startDate.length ? new Date(startDate) : null
    },
    leaveDate() {
      const leaveDate = this.experienceItem && this.experienceItem.leaveDate
      return leaveDate && leaveDate.length ? new Date(leaveDate) : null
    },
    dates() {
      if (!this.startDate) {
        return 'Present'
      }

      const options = {
        year: 'numeric',
        month: 'short',
      }

      const startDateString = this.startDate.toLocaleDateString(
        'en-GB',
        options
      )

      const leaveDateString = this.leaveDate
        ? this.leaveDate.toLocaleDateString('en-GB', options)
        : 'Present'

      return `${startDateString} - ${leaveDateString}`
    },
    duration() {
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  max-width: 36rem;
  padding: 1rem 0.5rem;
  text-align: left;
  font-size: 0.9rem;

  @media only screen and (min-width: 32.5rem) {
    font-size: 1rem;
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
      text-align: right;
      font-size: 0.85rem;

      @media only screen and (min-width: 32.5rem) {
        font-size: 0.935rem;
      }
    }
  }
}
</style>
