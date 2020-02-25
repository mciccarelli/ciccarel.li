import fetch from 'isomorphic-unfetch';
import { GITHUB_API_URL } from '../../../lib/constants';
import { uniqBy } from 'lodash';

export default async () => {
  try {
    const r = await fetch(`${GITHUB_API_URL}/events`);
    const data = await r.json();
    // filter out duplicate commits that used
    // git -m -ammend "some commit message"
    const items = await uniqBy(data, 'payload.commits[0].message');
    return await items
      // only include push and star events
      .filter(event => event.type === 'PushEvent' || event.type === 'StarEvent')
      .map(event => ({
        ...event,
        date: event.created_at,
        eventType: event.type,
        type: 'github',
      }));
  } catch (e) {
    console.error('error fetching githun data', e);
    return [];
  }
};
