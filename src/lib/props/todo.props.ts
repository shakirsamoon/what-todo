/**
 * Interface Class for `Todo`
 *
 */
interface ITodoProps {
  _id: string;
  title: string;
  body?: string;
  status: boolean;
  createAd: Date;
  updatedAt: Date;
}

export default ITodoProps;
