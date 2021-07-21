import {
  username,
  password,
  callback_url,
  rally_api_url,
  httpPost,
  set_authentication,
  access_token,
  refresh_token,
} from '../../../../utils/helperFunctions';

const register = async res => {
  try {
    const response = await httpPost(rally_api_url + '/oauth/register', {
      username,
      password,
    });
    const data = response.data;
    set_authentication(data);
  } catch (err) {
    set_authentication();
    res.status(500);
  }
};

const refresh = async () => {
  if (!refresh_token) {
    res.status(401).json({ error: 'Application not registered with Rally' });
  }
  try {
    const response = await httpPost(rally_api_url + '/oauth/refresh', {
      refresh_token,
    });
    const data = response.data;
    set_authentication(data);
  } catch (err) {
    set_authentication();
    res.status(500);
  }
};

const authorize = async res => {
  if (!access_token) {
    res.status(401).json({ error: 'Application not registered with Rally' });
  }
  try {
    const rally_response = await httpPost(
      rally_api_url + '/oauth/authorize',
      { callback: callback_url },
      { Authorization: 'Bearer ' + access_token }
    );
    return rally_response.data.url;
  } catch (err) {
    res.status(500);
  }
};

export default async (req, res) => {
  try {
    await register(res);
    // const refreshData = await refresh();
    const authorizeUrl = await authorize(res);
    res.redirect(authorizeUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
