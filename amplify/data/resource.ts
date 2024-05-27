import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Standup: a.model({
    hours: a.string(),
    attempt: a.integer(),
    standupId: a.string(),
    isDone: a.boolean()
  })
  .authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});