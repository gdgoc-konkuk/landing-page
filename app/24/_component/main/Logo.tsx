export default function Logo() {
  return (
    <>
      <div className="relative animate-[bounce-left_0.8s_ease-in_forwards_2100ms]">
        <div className="absolute left-0 top-0 z-0 h-[66px] w-[220px] origin-[0%_50%] -rotate-[30deg] animate-[scale-red_0.8s_linear_forwards_2100ms] rounded-[60px] bg-[#EA4335]"></div>
        <div className="absolute -top-[33px] left-0 z-10 h-[66px] w-[220px] origin-[0%_50%] rotate-[30deg] animate-[scale-blue_0.8s_linear_forwards_2100ms] rounded-[60px] bg-[#4285F4]"></div>
      </div>
      <div className="relative animate-[bounce-right_0.8s_ease-in_forwards_2100ms]">
        <div className="absolute left-[107px] top-0 z-40 h-[66px] w-[220px] origin-[100%_50%] rotate-[30deg] animate-[scale-green_0.8s_linear_forwards_2100ms] rounded-[60px] bg-[#34A853]"></div>
        <div className="absolute left-[107px] top-0 z-20 h-[66px] w-[220px] origin-[100%_50%] rotate-[30deg] animate-drop rounded-[60px] bg-[#FBBC04]"></div>
      </div>
    </>
  );
}
