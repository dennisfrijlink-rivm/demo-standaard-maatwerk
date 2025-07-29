export interface DataSets {
  help: string;
  success: boolean;
  result: string[];
}

export interface DataSet {
  help: string;
  success: boolean;
  result: Result;
}

export interface Result {
  author: string;
  author_email: string;
  creator_user_id: string;
  id: string;
  isopen: boolean;
  license_id: string;
  license_title: string;
  maintainer: string;
  maintainer_email: string;
  metadata_created: string;
  metadata_modified: string;
  name: string;
  notes: string;
  num_resources: number;
  num_tags: number;
  organization: Organization;
  owner_org: string;
  private: boolean;
  state: string;
  title: string;
  type: string;
  url: string;
  version: string;
  resources: Resource[];
  tags: any[];
  extras: any[];
  groups: any[];
  relationships_as_subject: any[];
  relationships_as_object: any[];
  tracking_summary: TrackingSummary2;
}

export interface Organization {
  id: string;
  name: string;
  title: string;
  type: string;
  description: string;
  image_url: string;
  created: string;
  is_organization: boolean;
  approval_status: string;
  state: string;
}

export interface Resource {
  cache_last_updated: any;
  cache_url: any;
  created: string;
  datastore_active: boolean;
  description: string;
  format: string;
  hash: string;
  id: string;
  last_modified: string;
  metadata_modified: string;
  mimetype: string;
  mimetype_inner: any;
  name: string;
  package_id: string;
  position: number;
  resource_type: any;
  size: number;
  state: string;
  tracking_summary: TrackingSummary;
  url: string;
  url_type: string;
}

export interface TrackingSummary {
  total: number;
  recent: number;
}

export interface TrackingSummary2 {
  total: number;
  recent: number;
}
