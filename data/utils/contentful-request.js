export default async function (context, query, item = false) {
  const { data } = await context.app.apolloProvider.defaultClient.query({
    query,
  })

  return item ? data[item].items : data
}
