import { API_URL } from '../../lib/constants';
import fetch from 'isomorphic-unfetch';
import fetchGithubEvents from './github';
import fetchInstagramPosts from './instagram';
import fetchTwitterActivity from './twitter';

const fetchStaticData = async route => {
  const req = await fetch(`${API_URL}/${route}`);
  return await req.json();
};

const handler = async (_, res) => {
  try {
    const [projects, updates, github, instagram, twitter] = await Promise.all([
      fetchStaticData(`projects`),
      fetchStaticData(`updates`),
      fetchGithubEvents(),
      fetchInstagramPosts(),
      fetchTwitterActivity(),
    ]);

    const sortedItems = [
      ...projects.map(project => ({ ...project, feedSource: 'project' })),
      ...updates.map(update => ({ ...update, feedSource: 'update' })),
      ...github,
      ...instagram,
      ...twitter,
    ]
      .sort(
        (d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()
      )
      .reverse();

    res.status(200).json(sortedItems);
  } catch (e) {
    res.status(404).json({ error: 'Error fetching activity feed.' });
  }
};

export default handler;
