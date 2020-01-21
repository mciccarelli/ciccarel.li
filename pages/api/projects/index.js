import { projects } from '../../../data';

export default (_, res) => {
  res.status(200).json(projects);
};
