import experienceItemCollection from '~/data/queries/experienceItemCollection.graphql'

export default async function getData(context, query, item = false) {
  const { data } = await context.app.apolloProvider.defaultClient.query({
    query,
  })

  return item ? data[item].items : data
}

export async function getExperienceItems(context) {
  return await getData(
    context,
    experienceItemCollection,
    'experienceItemCollection'
  )
}
