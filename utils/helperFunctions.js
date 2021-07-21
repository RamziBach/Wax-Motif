import axios from 'axios';

const username = process.env.RALLY_IO_USERNAME;
const password = process.env.RALLY_IO_PASSWORD;
const callback_url = process.env.SAMPLE_APP_CALLBACK;
const rally_api_url = `${process.env.RALLY_API_URL}/v1`;

const toConfig = headers =>
  headers && Object.keys(headers).length ? { headers } : undefined;

const httpPost = async (url, body, headers) => {
  try {
    return await axios.post(url, body, toConfig(headers));
  } catch (err) {
    return err.response;
  }
};

const httpGet = async (url, headers) => {
  try {
    return await axios.get(url, toConfig(headers));
  } catch (err) {
    return err.response;
  }
};

let access_token = undefined;
let refresh_token = undefined;
let expires = undefined;
let token_type = undefined;

const set_authentication = data => {
  if (data) {
    access_token = data.access_token;
    expires = (data.expires_in || 3600) * 1000 + Date.now();
    refresh_token = data.refresh_token || refresh_token;
    token_type = data.token_type;
  } else {
    access_token = undefined;
    expires = undefined;
    refresh_token = undefined;
    token_type = undefined;
  }
};

export {
  username,
  password,
  callback_url,
  rally_api_url,
  httpPost,
  httpGet,
  set_authentication,
  access_token,
  refresh_token,
  expires,
  token_type,
};
