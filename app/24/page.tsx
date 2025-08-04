import Footer from '@/app/_component/Footer';
import Header from '@/app/_component/Header';
import Main from '@/app/_component/main/Main';
import SolutionChallenge from '@/app/_component/solution-challenge/SolutionChallenge';
import Review from '@/app/_component/review/Review';
import Keyword from '@/app/_keyword/Keyword';
import Apply from '@/app/_component/apply/Apply';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Keyword />
      <Review />
      <SolutionChallenge />
      <Apply />
      <Footer />
    </div>
  );
}
