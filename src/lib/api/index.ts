import type { DataSets, DataSet } from "../types";
import { request } from "../utils";

async function getDataSets(): Promise<DataSets> {
  return await request("api/action/package_list");
}

async function getDataSetDetails(id: string): Promise<DataSet> {
  return await request(`api/action/package_show?id=${id}`);
}

export { getDataSets, getDataSetDetails };
