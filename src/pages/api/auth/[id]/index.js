import Cookies from 'cookies';
import {
  access_token,
  httpGet,
  rally_api_url,
} from '../../../../../utils/helperFunctions';

const getUserBalance = async (userId, res) => {
  if (!access_token) {
    res.status(401).json({ error: 'Application not registered with Rally' });
  }
  try {
    const rally_response = await httpGet(
      `${rally_api_url}/users/rally/${userId}/balance`,
      { Authorization: 'Bearer ' + access_token }
    );
    const data = rally_response.data;
    return data;
  } catch (err) {
    res.status(500);
  }
};

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const cookies = new Cookies(req, res);
  const userId = cookies.get('rnbUserId');

  if (id !== userId) {
    return res.status(401).json({ error: 'You shall not pass!' });
  }

  try {
    const balanceData = await getUserBalance(id, res);
    res.status(200).json(balanceData);
  } catch (err) {
    res.status(500);
  }
};
