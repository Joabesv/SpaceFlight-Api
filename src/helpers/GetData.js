import axios from 'axios';

export default async function getAPIData() {
  try {
    const response = await axios.get(
      'https://api.spaceflightnewsapi.net/v3/articles/'
    );
    return await response.data;
  } catch (err) {
    console.error(err);
  }
}
