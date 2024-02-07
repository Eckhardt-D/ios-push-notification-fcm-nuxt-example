export const DB: string[] = []
export default defineEventHandler(async (event) => {
  const { token } = await readBody(event)
  
  // Save the token to db
  DB.push(token as string)

  return 'ok'
})
