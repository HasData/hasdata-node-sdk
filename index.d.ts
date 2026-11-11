declare enum ProxyType {
  'datacenter',
  'residential'
}

declare type CustomHeaders = {
  [headerName: string]: string,
}

declare type ExtractionRules = {
  [propertyName: string]: string,
}

declare type ScenarioStep = {
  evaluate?: string,
  click?: string,
  wait?: number,
  waitFor?: string,
  waitForAndClick?: string,
  scrollX?: number,
  scrollY?: number,
  fill?: Array<string>
}

declare type ScrapeitCloudAPIParams = {
  url: string,
  screenshot?: boolean,
  wait?: number,
  waitFor?: string,
  proxyType?: string|ProxyType,
  proxyCountry?: string,
  blockResources?: boolean,
  blockUrls?: Array<string>,
  headers?: CustomHeaders,
  extractRules?: ExtractionRules
  jsRendering?: boolean,
  jsScenario?: Array<ScenarioStep>,
  window_height?: number,
  window_width?: number,
}

declare type ScrapeitCloudAPIResponse = {
  screenshot?: string,
  content: string,
  headers?: Object,
  cookies?: Array<Object>
}

declare class ScrapeitCloud {
  private readonly apiKey: string;
  constructor(apiKey: string);

  scrape(params: ScrapeitCloudAPIParams): Promise<ScrapeitCloudAPIResponse>;
}

export default ScrapeitCloud;
