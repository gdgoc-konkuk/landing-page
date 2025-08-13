import React from 'react';

interface ActivityIconProps {
  colors: IconColors;
}

function ActivityIcon ({ colors } :  ActivityIconProps) {
  const petalStyle =
    'w-[46.4%] h-[35.9%] absolute origin-top-left rounded-full border-[3px] border-black';

  return (
    <div className="relative w-full aspect-[154/91]">
      <div
        className={`${petalStyle} left-[12.1%] top-[25.5%] rotate-[35deg]`}
        style={{ backgroundColor: colors.topLeft }}
      />
      <div
        className={`${petalStyle} left-[0.1%] top-[46.2%] -rotate-[36deg]`}
        style={{ backgroundColor: colors.bottomLeft }}
      />
      <div
        className={`${petalStyle} left-[87.5%] top-[75%] -rotate-[144.09deg]`}
        style={{ backgroundColor: colors.bottomRight }}
      />
      <div
        className={`${petalStyle} left-[99.8%] top-[54.9%] rotate-[145.09deg]`}
        style={{ backgroundColor: colors.topRight }}
      />
    </div>
  );
};

export default ActivityIcon;
