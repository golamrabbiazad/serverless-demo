import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";
import app from "./app";

const serverlessHandler = serverless(app);

export async function handler(event: APIGatewayProxyEvent, ctx: Context) {
  event.path = event.path === "" ? "/" : event.path;
  const result = await serverlessHandler(event, ctx);
  return result;
}
