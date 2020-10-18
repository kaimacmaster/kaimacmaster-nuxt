<template>
  <article>
    <div class="article-header">
      <div>
        <h2 class="title" v-text="companyName" />
        <h3 class="subtitle" v-text="jobTitle" />
      </div>
      <div class="dates">
        <time v-text="duration" />
        <span class="datesText" v-text="dates" />
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
      return this.experienceItem?.companyName
    },
    jobTitle() {
      return this.experienceItem?.jobTitle
    },
    description() {
      return this.experienceItem?.description
    },
    startDate() {
      const startDate = this.experienceItem?.startDate
      return startDate && new Date(startDate)
    },
    leaveDate() {
      const leaveDate = this.experienceItem?.leaveDate
      return leaveDate && new Date(leaveDate)
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
      const startDate = this.startDate
      const endDate = this.leaveDate || new Date()

      let diff = (endDate.getTime() - startDate.getTime()) / 1000
      diff /= 60 * 60 * 24 * 7 * 4
      const totalMonths = Math.abs(Math.round(diff))

      if (totalMonths < 12) {
        return `${totalMonths} months`
      }

      return `${Math.floor(totalMonths / 12)} yrs, ${totalMonths % 12} mths`
    },
  },
}
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
