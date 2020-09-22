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
  padding: 1rem;
  text-align: left;

  .article-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 0.25rem;
    line-height: 1.33;

    .dates {
      text-align: right;
    }
  }
}
</style>
