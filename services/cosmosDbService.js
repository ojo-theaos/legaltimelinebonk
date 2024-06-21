// services/cosmosDbService.js
const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.REACT_APP_COSMOS_DB_ENDPOINT;
const key = process.env.REACT_APP_COSMOS_DB_KEY;
const databaseId = process.env.REACT_APP_COSMOS_DB_DATABASE_ID;
const containerId = process.env.REACT_APP_COSMOS_DB_CONTAINER_ID;

const client = new CosmosClient({ endpoint, key });

export async function exportTimelineToCosmosDb(timelineData) {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  const { container } = await database.containers.createIfNotExists({ id: containerId });

  const { resource: createdItem } = await container.items.create({
    id: new Date().toISOString(),
    timelineData: timelineData
  });

  return createdItem;
}