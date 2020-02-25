import fetch from 'isomorphic-unfetch';
import { INSTAGRAM_API_URL } from '../../../lib/constants';

export default async () => {
  try {
    const r = await fetch(INSTAGRAM_API_URL);
    const data = await r.json();

    // NOTE: in case IG disables this endpoint.
    // this is an alternative route: https://instagram.com/graphql/query/?query_id=17888483320059182&id=4388538&first=12
    // response shape: data.data.user.edge_owner_to_timeline_media.edges
    return await data.graphql.user.edge_owner_to_timeline_media.edges.map(
      ({ node }) => ({
        type: 'instagram',
        url: `https://instagram.com/p/${node.shortcode}`,
        location: node && node.location && node.location.name,
        date: new Date(node.taken_at_timestamp * 1000),
      })
    );
  } catch (e) {
    console.error('error fetching instagram data', e);
    return [];
  }
};
