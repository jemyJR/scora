import CustomAppBar from '../../components/CustomAppBar';
import CompetitionsGrid from './components/CompetitionsGrid';
import data from './data.json';

const CompetitionsPage = () => {
  return (
    <>
      <CustomAppBar title="Football Competitions"/>
      <CompetitionsGrid data={data}></CompetitionsGrid>
    </>
  );
};

export default CompetitionsPage;