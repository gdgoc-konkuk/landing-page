import Footer from '@/app/24/_component/Footer';
import Header from '@/app/24/_component/Header';
import Main from '@/app/24/_component/main/Main';
import SolutionChallenge from '@/app/24/_component/solution-challenge/SolutionChallenge';
import Review from '@/app/24/_component/review/Review';
import Keyword from '@/app/24/_component/_keyword/Keyword';
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
