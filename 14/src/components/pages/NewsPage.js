import { useParams } from '../../../node_modules/react-router-dom/dist/index';
import Cartegories from '../Categories';
import NewsList from '../NewsList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Cartegories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
