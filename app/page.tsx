
import WaveBackground from './_component/WaveBackground';
import WaterDropCursor from './_component/WaterDropCursor';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen select-none">
      <WaveBackground />
      <WaterDropCursor />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          GDGoC 25-26 Landing Page
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl">
          This is the GDGoC 25-26 landing page with animated wave background.
        </p>
      </div>
    </div>
  );
}
