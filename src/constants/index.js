export const API_CREDENTIALS = {
  SPACE_ID: 'kk2bw5ojx476',
  ENVIRONMENT_ID: 'master',
  ACCESS_TOKEN:
    '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c'
};
const APP_LABELS={
  NOT_FOUND_MESSAGE:'Kitchen is empty. Please come back later',
  APP_LOGO_TEXT:'Marleyspoon'
}
const BASE_URL = `https://cdn.contentful.com/spaces/${API_CREDENTIALS.SPACE_ID}/environments/${API_CREDENTIALS.ENVIRONMENT_ID}/entries?access_token=${API_CREDENTIALS.ACCESS_TOKEN}`;

const API_TYPE = {
  RECIPES: BASE_URL + '&content_type=recipe&select=fields',
  TAGS: BASE_URL + '&content_type=tag',
  CHEF: BASE_URL + '&content_type=chef'
};

export { API_TYPE, APP_LABELS };
