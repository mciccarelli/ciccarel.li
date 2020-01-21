import fetch from 'isomorphic-unfetch';
import { INSTAGRAM_API_URL } from '../../../lib/constants';

export default async () => {
  try {
    const r = await fetch(INSTAGRAM_API_URL);
    const data = await r.json();

    return await data.graphql.user.edge_owner_to_timeline_media.edges.map(
      ({ node }) => ({
        feedSource: 'instagram',
        url: `https://instagram.com/p/${node.shortcode}`,
        location: node && node.location && node.location.name,
        date: new Date(node.taken_at_timestamp * 1000),
      })
    );
  } catch (e) {
    return { error: 'Error fetching instagram data.' };
  }
};
