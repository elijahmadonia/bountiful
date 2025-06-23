import svgPaths from "./svg-yvd50js93n";
import imgChartBackground from "figma:asset/f62a9f92e3fd371156ca8a50d867cbf5cb758b21.png";
import imgChartForeground from "figma:asset/058a3f80b43bb83edcb22153086e76ddff9a0486.png";
import imgChartForeground1 from "figma:asset/69c8c5e43aa75633703d23262ff2ea21aeed44b7.png";
import imgChartForeground2 from "figma:asset/e8e18c02f66ece07433c7d155501d632d8aa9f92.png";
import imgChartForeground3 from "figma:asset/e6e043751e101a6f0e09e1d7c9fa76b261534bd7.png";
import imgChartForeground4 from "figma:asset/f19dedfdce30ae47e2e61774c6f6ae17b7087d56.png";

function Labels() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">activity</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Activity</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Labels />
    </div>
  );
}

function Labels1() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">Alarm</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Alarm</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer1() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[222px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels1 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels2() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">audiobooks</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Audiobooks</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer2() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[444px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels2 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels3() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">calendar</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Your Schedule</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer3() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[666px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels3 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[888px]"
      data-name="Row"
    >
      <div className="h-[180px] overflow-clip relative w-[888px]">
        <ComplicationContainer />
        <ComplicationContainer1 />
        <ComplicationContainer2 />
        <ComplicationContainer3 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels4() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">compass</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Compass</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer4() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels4 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels5() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">Heart Rate</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Heart Rate</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer5() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[222px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels5 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels6() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">music</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Music</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer6() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[444px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels6 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels7() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">NEWS</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">News</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer7() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[666px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels7 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-[180px] w-[888px]"
      data-name="Row"
    >
      <div className="h-[180px] overflow-clip relative w-[888px]">
        <ComplicationContainer4 />
        <ComplicationContainer5 />
        <ComplicationContainer6 />
        <ComplicationContainer7 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels8() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">noise</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Sound Levels</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer8() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels8 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels9() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">now playing</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Now Playing</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer9() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[222px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels9 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels10() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">podcasts</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Podcasts</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer10() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[444px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels10 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels11() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">radio</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Radio</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer11() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[666px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels11 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row2() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-[360px] w-[888px]"
      data-name="Row"
    >
      <div className="h-[180px] overflow-clip relative w-[888px]">
        <ComplicationContainer8 />
        <ComplicationContainer9 />
        <ComplicationContainer10 />
        <ComplicationContainer11 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels12() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">reminders</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Reminders</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer12() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels12 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels13() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">stopwatch</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Stopwatch</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer13() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[222px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels13 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels14() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">timer</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Timer</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer14() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[444px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels14 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels15() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">weather</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Conditions</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer15() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[666px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels15 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row3() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-[540px] w-[888px]"
      data-name="Row"
    >
      <div className="h-[180px] overflow-clip relative w-[888px]">
        <ComplicationContainer12 />
        <ComplicationContainer13 />
        <ComplicationContainer14 />
        <ComplicationContainer15 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels16() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">weather</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Rain</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer16() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels16 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels17() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">weather</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">UV Index</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer17() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[222px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels17 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels18() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">weather</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Wind</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer18() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[444px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels18 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels19() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">workout</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Workout</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer19() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[666px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels19 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row4() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-[720px] w-[888px]"
      data-name="Row"
    >
      <div className="h-[180px] overflow-clip relative w-[888px]">
        <ComplicationContainer16 />
        <ComplicationContainer17 />
        <ComplicationContainer18 />
        <ComplicationContainer19 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels20() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">world clock</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Sunrise / Sunset</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer20() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels20 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Labels21() {
  return (
    <div className="absolute left-6 top-[116px] w-[174px]" data-name="Labels">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-center w-[174px]">
        <div className="font-['SF_Pro_Text:Bold',_sans-serif] relative shrink-0 text-[#7cc7f3] text-[11px] tracking-[1.5px] uppercase w-full">
          <p className="block leading-[16px]">world clock</p>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center relative shrink-0 text-[#f2f2f2] text-[16px] tracking-[0.15px] w-full">
          <p className="block leading-[24px]">Digital Clock</p>
        </div>
      </div>
    </div>
  );
}

function ComplicationContainer21() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-[222px] top-0 w-[222px]"
      data-name="Complication Container"
    >
      <div className="h-[180px] overflow-clip relative w-[222px]">
        <Labels21 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row5() {
  return (
    <div
      className="absolute bg-[#000000] h-[180px] left-0 top-[900px] w-[444px]"
      data-name="Row"
    >
      <div className="h-[180px] overflow-clip relative w-[444px]">
        <ComplicationContainer20 />
        <ComplicationContainer21 />
      </div>
      <div className="absolute border-[#403f40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Grid() {
  return (
    <div
      className="absolute bg-[#000000] h-[1080px] left-0 top-0 w-[888px]"
      data-name="Grid"
    >
      <div className="h-[1080px] overflow-clip relative w-[888px]">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
      </div>
      <div className="absolute border border-[#403f40] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function GridLines() {
  return (
    <div className="absolute contents left-0 top-[21px]" data-name="Grid Lines">
      <div
        className="absolute bg-[#403f40] h-[46px] left-px top-[21px] w-px"
        data-name="Grid Line"
      />
      <div className="absolute flex h-[1px] items-center justify-center left-0 top-10 w-[174px]">
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#403f40] h-[174px] w-px" data-name="Grid Line" />
        </div>
      </div>
      <div className="absolute flex h-[1px] items-center justify-center left-0 top-[59px] w-[174px]">
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#403f40] h-[174px] w-px" data-name="Grid Line" />
        </div>
      </div>
      <div className="absolute flex h-[1px] items-center justify-center left-0 top-[66px] w-[174px]">
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#403f40] h-[174px] w-px" data-name="Grid Line" />
        </div>
      </div>
      <div
        className="absolute bg-[#403f40] h-[46px] left-[8.7px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[16.4px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[24.101px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[31.801px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[47px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[55px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[63px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[70.7px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[78.4px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[93px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[100.7px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[108.4px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[116.101px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[123.801px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[39.501px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[85.702px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[131.903px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[140px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[147.7px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[155.4px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[163.101px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[170.801px] top-[21px] w-px"
        data-name="Grid Line"
      />
    </div>
  );
}

function Time() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-0 not-italic text-[#f2f2f2] text-[10px] text-center top-[69px]"
      data-name="Time"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[12.5px] opacity-30 top-[73.5px] translate-x-[-50%] translate-y-[-50%] w-[25px]">
        <p className="block leading-[normal]">12AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] opacity-30 top-[73.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">6AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[100px] opacity-30 top-[73.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">12PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-36 opacity-30 top-[73.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">6PM</p>
      </div>
    </div>
  );
}

function StandActivity() {
  return (
    <div
      className="absolute contents left-[49.3px] top-[60.8px]"
      data-name="Stand Activity"
    >
      <div
        className="absolute left-[49.3px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[57.3px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[65px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[72.7px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[80.4px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[87.8px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[95.2px] size-[4.5px] top-[60.8px]"
        data-name="Inactive Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Inactive Ellipse"
            opacity="0.36"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[102.8px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[110.5px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[118.3px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
      <div
        className="absolute left-[126.1px] size-[4.5px] top-[60.8px]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
        >
          <circle
            cx="2.25"
            cy="2.25"
            fill="var(--fill-0, #54B9DC)"
            id="Ellipse"
            r="2.25"
          />
        </svg>
      </div>
    </div>
  );
}

function ExerciseActivity() {
  return (
    <div
      className="absolute contents left-[2.8px] top-[42px]"
      data-name="Exercise Activity"
    >
      <div
        className="absolute bg-[#bafd4f] h-[16.5px] left-[49px] rounded-[50px] top-[42px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#bafd4f] h-[11.5px] left-[52px] rounded-[50px] top-[47px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[110.3px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[113.3px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[134px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[137px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[141.899px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[144.899px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[149.5px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[152.5px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[157.2px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[160.2px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[165px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[168px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[172.8px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[64.8px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[67.8px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[57px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[60px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[41.2px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[44.2px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[33.7px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[36.7px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[26px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[29px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[18.3px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[21.3px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[10.601px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[13.601px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[2.8px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[5.8px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[118px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] h-[4.5px] left-[121px] rounded-[50px] top-[54px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[102.5px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] h-[3.5px] left-[105.5px] rounded-[50px] top-[55px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#bafd4f] left-[94.8px] opacity-[0.32] rounded-[50px] size-0.5 top-[56.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#bafd4f] h-[3.5px] left-[97.8px] rounded-[50px] top-[55px] w-0.5"
        data-name="Bar"
      />
      <div className="absolute flex items-center justify-center left-[90.5px] size-0.5 top-[56.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-[#bafd4f] opacity-[0.32] rounded-[50px] size-0.5"
            data-name="Inactive Bar"
          />
        </div>
      </div>
      <div className="absolute flex h-[3.5px] items-center justify-center left-[87.5px] top-[55px] w-0.5">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-[#bafd4f] h-[3.5px] rounded-[50px] w-0.5"
            data-name="Bar"
          />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[83px] size-0.5 top-[56.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-[#bafd4f] opacity-[0.32] rounded-[50px] size-0.5"
            data-name="Inactive Bar"
          />
        </div>
      </div>
      <div className="absolute flex h-[3.5px] items-center justify-center left-20 top-[55px] w-0.5">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-[#bafd4f] h-[3.5px] rounded-[50px] w-0.5"
            data-name="Bar"
          />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[75.5px] size-0.5 top-[56.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-[#bafd4f] opacity-[0.32] rounded-[50px] size-0.5"
            data-name="Inactive Bar"
          />
        </div>
      </div>
      <div className="absolute flex h-[3.5px] items-center justify-center left-[72.5px] top-[55px] w-0.5">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-[#bafd4f] h-[3.5px] rounded-[50px] w-0.5"
            data-name="Bar"
          />
        </div>
      </div>
      <div
        className="absolute bg-[#bafd4f] h-1.5 left-[125.8px] rounded-[50px] top-[52.5px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#bafd4f] h-[13.5px] left-[128.8px] rounded-[50px] top-[45px] w-0.5"
        data-name="Bar"
      />
    </div>
  );
}

function MoveActivity() {
  return (
    <div
      className="absolute contents left-[2.8px] top-[22px]"
      data-name="Move Activity"
    >
      <div
        className="absolute bg-[#e6434f] h-[17.5px] left-[49px] rounded-[50px] top-[22px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[11.5px] left-[52px] rounded-[50px] top-7 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[7.5px] left-[57px] rounded-[50px] top-8 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[7.5px] left-[60px] rounded-[50px] top-8 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[8.5px] left-[64.8px] rounded-[50px] top-[31px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[6.5px] left-[67.8px] rounded-[50px] top-[33px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[9.5px] left-[72.5px] rounded-[50px] top-[30px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[7.5px] left-[75.5px] rounded-[50px] top-8 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[7.5px] left-20 rounded-[50px] top-8 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[7.5px] left-[83px] rounded-[50px] top-8 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[6.5px] left-[87.5px] rounded-[50px] top-[33px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[3.5px] left-[90.5px] rounded-[50px] top-9 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[8.5px] left-[94.8px] rounded-[50px] top-[31px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[11.5px] left-[97.8px] rounded-[50px] top-7 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[9.5px] left-[102.5px] rounded-[50px] top-[30px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[6.5px] left-[105.5px] rounded-[50px] top-[33px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[8.5px] left-[110.3px] rounded-[50px] top-[31px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[4.5px] left-[113.3px] rounded-[50px] top-[35px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[134px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[137px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[141.899px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[144.899px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[149.5px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[152.5px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[157.2px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[160.2px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[165px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[168px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[172.8px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[41.2px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[44.2px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[33.7px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[36.7px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[26px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[29px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[18.3px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[21.3px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[10.601px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[13.601px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[2.8px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] left-[5.8px] opacity-[0.36] rounded-[50px] size-0.5 top-[37.5px]"
        data-name="Inactive Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[5.5px] left-[118px] rounded-[50px] top-[34px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[4.5px] left-[121px] rounded-[50px] top-[35px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-1.5 left-[125.8px] rounded-[50px] top-[33.5px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#e6434f] h-[13.5px] left-[128.8px] rounded-[50px] top-[26px] w-0.5"
        data-name="Bar"
      />
    </div>
  );
}

function SymbolContainer() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-4"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="Symbol Container">
          <path
            d={svgPaths.pf47d480}
            fill="var(--fill-0, #E6434F)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function MoveActivityContainer() {
  return (
    <div className="relative shrink-0" data-name="Move Activity Container">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
        <SymbolContainer />
        <div className="flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6434f] text-[15px] text-left text-nowrap">
          <p className="block leading-[1.3] whitespace-pre">345</p>
        </div>
      </div>
    </div>
  );
}

function SymbolContainer1() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-[17px]"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol Container">
          <g id="Symbol">
            <path d={svgPaths.p3c0eea70} fill="#BAFD4F" />
            <path d={svgPaths.p25431a00} fill="var(--fill-0, #BAFD4F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExerciseActivityContainer() {
  return (
    <div className="relative shrink-0" data-name="Exercise Activity Container">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
        <SymbolContainer1 />
        <div className="flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bafd4f] text-[15px] text-left text-nowrap">
          <p className="block leading-[1.3] whitespace-pre">43</p>
        </div>
      </div>
    </div>
  );
}

function SymbolContainer2() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-4"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="Symbol Container">
          <path
            d={svgPaths.p223b33c0}
            fill="var(--fill-0, #75E6E5)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function StandActivityContainer() {
  return (
    <div className="relative shrink-0" data-name="Stand Activity Container">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
        <SymbolContainer2 />
        <div className="flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#75e6e5] text-[15px] text-left text-nowrap">
          <p className="block leading-[1.3] whitespace-pre">10</p>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-[0.5px] items-start justify-start p-0 relative w-[174px]">
        <div className="flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f2f2] text-[15px] text-left text-nowrap">
          <p className="block leading-[1.3] whitespace-pre">ACTIVITY</p>
        </div>
        <MoveActivityContainer />
        <ExerciseActivityContainer />
        <StandActivityContainer />
      </div>
    </div>
  );
}

function RectangularComplication() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[90.556%] left-[2.703%] overflow-clip right-[77.703%] rounded-bl-[4px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] top-[2.222%]"
      data-name="Rectangular Complication"
    >
      <GridLines />
      <Time />
      <StandActivity />
      <ExerciseActivity />
      <MoveActivity />
      <HeaderContainer />
    </div>
  );
}

function Symbol() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <g id="Symbol">
            <path d={svgPaths.p3d134480} fill="#F2A33C" />
            <path d={svgPaths.pb6cf030} fill="var(--fill-0, #F2F2F2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2a33c] text-[19px] text-left">
          <p className="block leading-[1.3]">Alarm</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication1() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[90.556%] left-[27.703%] right-[52.703%] rounded-md top-[2.222%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Pro_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[0px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="leading-[normal]">
          <span className="text-[18px]">3</span>
          <span className="text-[15px]">HR</span>
          <span className="text-[18px]">{` 9`}</span>
          <span className="text-[15px]">MIN</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[0px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="leading-[normal]">
          <span className="text-[18px]">7:00</span>
          <span className="text-[15px]">AM</span>
        </p>
      </div>
      <HeaderContainer1 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div
      className="absolute h-3 left-px overflow-clip rounded-[50px] top-[56.5px] w-[171px]"
      data-name="Progress Bar"
    >
      <div
        className="absolute bg-[#f2a33c] h-3 left-0 opacity-30 rounded-[50px] top-0 w-[171px]"
        data-name="Shell"
      />
      <div
        className="absolute bg-[#f2a33c] h-3 left-0 rounded-[50px] top-0 w-[111px]"
        data-name="Elapsed"
      />
    </div>
  );
}

function HeaderContainer2() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2a33c] text-[19px] text-left">
          <p className="block leading-[1.3]">The Alchemist</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication2() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[90.556%] left-[52.703%] right-[27.703%] rounded-md top-[2.222%]"
      data-name="Rectangular Complication"
    >
      <ProgressBar />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Prologue</p>
      </div>
      <HeaderContainer2 />
    </div>
  );
}

function RectangularComplication3() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[90.556%] left-[77.703%] right-[2.703%] rounded-md top-[2.222%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-3 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[62px] translate-y-[-50%] w-[162px]">
        <p className="block leading-[normal]">Gym</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-3 not-italic text-[#f2f2f2] text-[18px] text-left top-10 translate-y-[-50%] w-[162px]">
        <p className="block leading-[normal]">Yoga</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] h-[19px] justify-center leading-[0] left-3 not-italic text-[#f2f2f2] text-[0px] text-left top-[17.5px] translate-y-[-50%] w-[161.069px]">
        <p className="leading-[1.3]">
          <span className="text-[19px]">8:00-9:00</span>
          <span className="text-[16px]">AM</span>
        </p>
      </div>
      <div
        className="absolute bg-[#4fadf8] h-[58px] left-px rounded-[50px] top-[11px] w-1"
        data-name="Bar"
      />
    </div>
  );
}

function Direction() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[19px] not-italic text-[#f2f2f2] text-[10px] text-center top-[63px]"
      data-name="Direction"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] top-[67.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">NW</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[142px] top-[67.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">N</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[30px] top-[67.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">W</p>
      </div>
    </div>
  );
}

function InactiveRegion() {
  return (
    <div
      className="absolute left-[141px] top-[42px]"
      data-name="Inactive Region"
    >
      <div className="box-border content-stretch flex flex-row gap-[5px] items-end justify-start p-0 relative">
        <div
          className="bg-[#c4c4c4] h-[18px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-[15px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
      </div>
    </div>
  );
}

function InactiveRegion1() {
  return (
    <div className="absolute left-[5px] top-[42px]" data-name="Inactive Region">
      <div className="box-border content-stretch flex flex-row gap-[5.2px] items-end justify-start p-0 relative">
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-[15px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-[18px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-[15px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-[18px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#c4c4c4] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
      </div>
    </div>
  );
}

function ActiveRegion() {
  return (
    <div
      className="absolute left-[85.5px] top-[42px]"
      data-name="Active Region"
    >
      <div className="box-border content-stretch flex flex-row gap-[2.7px] items-end justify-start p-0 relative">
        <div
          className="bg-[#eb5545] h-[15px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-[18px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-[15px] shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
        <div
          className="bg-[#eb5545] h-2.5 shrink-0 w-px"
          data-name="Grid Line"
        />
      </div>
    </div>
  );
}

function Degrees() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[21px] not-italic text-[#fe6a1a] text-[10px] text-center top-[22px]"
      data-name="Degrees"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[31px] top-[26.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">270</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[68px] top-[26.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">300</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[105px] top-[26.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">330</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[142px] top-[26.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">0</p>
      </div>
    </div>
  );
}

function HeaderContainer3() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row font-['SF_Compact_Rounded:Medium',_sans-serif] items-start justify-between leading-[0] not-italic p-0 relative text-[15px] text-nowrap w-[174px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[#f2f2f2] text-left">
          <p className="leading-[1.3] text-nowrap whitespace-pre">
            <span className="text-[#fe6a1a]">315°</span>
            <span>{` NW`}</span>
          </p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#eb5545] text-right">
          <p className="block leading-[1.3] text-nowrap whitespace-pre">0°</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication4() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[73.889%] left-[2.703%] overflow-clip right-[77.703%] rounded-md top-[18.889%]"
      data-name="Rectangular Complication"
    >
      <Direction />
      <InactiveRegion />
      <InactiveRegion1 />
      <ActiveRegion />
      <div
        className="absolute h-[5.115px] left-[82.4px] top-[57px] w-[7.2px]"
        data-name="Indicator"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 6"
        >
          <path
            d={svgPaths.p11e33600}
            fill="var(--fill-0, #FE6A1A)"
            id="Indicator"
          />
        </svg>
      </div>
      <div
        className="absolute h-5 left-[147px] top-[42px] w-[27px]"
        data-name="Scrim"
        style={{
          backgroundImage:
            "linear-gradient(-90deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div className="absolute flex h-5 items-center justify-center left-0 top-[42px] w-[27px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="h-5 w-[27px]"
            data-name="Scrim"
            style={{
              backgroundImage:
                "linear-gradient(-90deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
        </div>
      </div>
      <Degrees />
      <HeaderContainer3 />
    </div>
  );
}

function Time1() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[19px] not-italic text-[#f2f2f2] text-[10px] text-center top-[68px]"
      data-name="Time"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[31.5px] opacity-30 top-[72.5px] translate-x-[-50%] translate-y-[-50%] w-[25px]">
        <p className="block leading-[normal]">12AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[69px] opacity-30 top-[72.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">6AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[108px] opacity-30 top-[72.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">12PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[145px] opacity-30 top-[72.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">6PM</p>
      </div>
    </div>
  );
}

function GridLines1() {
  return (
    <div className="absolute contents left-[18px] top-5" data-name="Grid Lines">
      <div
        className="absolute bg-[#403f40] h-14 left-[18px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[24.35px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[30.7px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[37.05px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[43.4px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[49.75px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[56.1px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[62.45px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[68.8px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[75.15px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[81.5px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[87.85px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[94.2px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[100.55px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[106.9px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[113.25px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[119.6px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[125.95px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[132.3px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[138.65px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[145px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[151.35px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[157.7px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[46px] left-[164.05px] top-5 w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-14 left-[170.4px] top-5 w-px"
        data-name="Grid Line"
      />
    </div>
  );
}

function Bars() {
  return (
    <div className="absolute contents left-[55.7px] top-5" data-name="Bars">
      <div
        className="absolute bg-[#f2f2f2] h-1.5 left-[55.7px] rounded-[50px] top-[60px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-3 left-[58.5px] rounded-[50px] top-7 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-2 left-[62px] rounded-[50px] top-5 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-8 left-[62px] rounded-[50px] top-[30px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-1.5 left-[65.2px] rounded-[50px] top-14 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-[9px] left-[68.3px] rounded-[50px] top-14 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-[15px] left-[71.5px] rounded-[50px] top-[49px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-2 left-[74.7px] rounded-[50px] top-11 w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-2 left-[74.7px] rounded-[50px] top-[54px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-[13px] left-[78px] rounded-[50px] top-[49px] w-0.5"
        data-name="Bar"
      />
      <div
        className="absolute bg-[#f2f2f2] h-4 left-[58.5px] rounded-[50px] top-[45px] w-0.5"
        data-name="Bar"
      />
    </div>
  );
}

function YAxisLabels() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-px not-italic text-[#f2f2f2] text-[10px] text-center top-5"
      data-name="Y Axis Labels"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[9px] top-[24.5px] translate-x-[-50%] translate-y-[-50%] w-4">
        <p className="block leading-[normal]">173</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[7px] top-[62.5px] translate-x-[-50%] translate-y-[-50%] w-3">
        <p className="block leading-[normal]">54</p>
      </div>
    </div>
  );
}

function HeaderContainer4() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-[174px]">
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2f2f2] text-[15px] text-left">
          <p className="leading-[1.3]">
            <span>{`64 BPM `}</span>
            <span className="text-[#eb5545]">3 MINUTES AGO</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication5() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[73.889%] left-[27.703%] overflow-clip right-[52.703%] rounded-md top-[18.889%]"
      data-name="Rectangular Complication"
    >
      <Time1 />
      <GridLines1 />
      <Bars />
      <YAxisLabels />
      <HeaderContainer4 />
    </div>
  );
}

function Symbol1() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <g id="Vector">
            <path d={svgPaths.p3862e400} fill="var(--fill-0, #E6434F)" />
            <path d={svgPaths.p29071600} fill="var(--fill-0, #E6434F)" />
            <path d={svgPaths.pab30a00} fill="var(--fill-0, #E6434F)" />
            <path d={svgPaths.p32c2b100} fill="var(--fill-0, #E6434F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateContainer() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="State Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol1 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e6434f] text-[19px] text-left">
          <p className="block leading-[1.3]">Now Playing</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication6() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[73.889%] left-[52.703%] right-[27.703%] rounded-md top-[18.889%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Something About Us</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Daft Punk</p>
      </div>
      <StateContainer />
    </div>
  );
}

function Symbol2() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <path
            d={svgPaths.p2a12c080}
            fill="var(--fill-0, #E95B64)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer5() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[174px]">
        <Symbol2 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e95b64] text-[19px] text-left">
          <p className="block leading-[1.3]">Editor’s Picks</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication7() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[73.889%] left-[77.703%] right-[2.703%] rounded-md top-[18.889%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Design Intelligence</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Closing the loop with</p>
      </div>
      <HeaderContainer5 />
    </div>
  );
}

function Bars1() {
  return (
    <div className="absolute contents left-px top-[54px]" data-name="Bars">
      <div
        className="absolute h-[11px] left-px top-14 w-[83px]"
        data-name="Active Decibles"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 83 11"
        >
          <g id="Active Decibles">
            <path d={svgPaths.p2173c300} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p2bc18200} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p14908500} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p1f94cc00} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p191fbf92} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p24e1800} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p371e7940} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.p25d3b00} fill="var(--fill-0, #68CE67)" />
            <path d={svgPaths.pad3fe00} fill="var(--fill-0, #68CE67)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[15px] left-[86.5px] top-[54px] w-[83px]"
        data-name="Inactive Decibels"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 83 15"
        >
          <g id="Inactive Decibels" opacity="0.3">
            <path d={svgPaths.p24632380} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p283dcb00} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p26e23e80} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p3fbed300} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p29483c80} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p9036680} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p49fcd80} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p85b900} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p2acaf600} fill="var(--fill-0, #F2F2F2)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Symbol3() {
  return (
    <div className="h-[19px] relative shrink-0 w-[13px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 19"
      >
        <g id="Symbol ">
          <path
            d={svgPaths.p37c2e900}
            fill="var(--fill-0, #68CE67)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function StateContainer1() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="State Container"
    >
      <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative w-[173px]">
        <Symbol3 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#68ce67] text-[19px] text-left">
          <p className="block leading-[1.3]">OK</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication8() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[57.222%] left-[2.703%] right-[77.703%] rounded-md top-[35.556%]"
      data-name="Rectangular Complication"
    >
      <Bars1 />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">74 decibles</p>
      </div>
      <StateContainer1 />
    </div>
  );
}

function Symbol4() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <g id="Vector">
            <path d={svgPaths.p3862e400} fill="var(--fill-0, #3B82F7)" />
            <path d={svgPaths.p29071600} fill="var(--fill-0, #3B82F7)" />
            <path d={svgPaths.pab30a00} fill="var(--fill-0, #3B82F7)" />
            <path d={svgPaths.p32c2b100} fill="var(--fill-0, #3B82F7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateContainer2() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="State Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol4 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3b82f7] text-[19px] text-left">
          <p className="block leading-[1.3]">Now Playing</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication9() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[57.222%] left-[27.703%] right-[52.703%] rounded-md top-[35.556%]"
      data-name="Rectangular Complication"
    >
      <StateContainer2 />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Coldplay</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">A Head Full of Drea...</p>
      </div>
    </div>
  );
}

function Symbol5() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <g id="Vector">
            <path d={svgPaths.p3862e400} fill="var(--fill-0, #935DEA)" />
            <path d={svgPaths.p29071600} fill="var(--fill-0, #935DEA)" />
            <path d={svgPaths.pab30a00} fill="var(--fill-0, #935DEA)" />
            <path d={svgPaths.p32c2b100} fill="var(--fill-0, #935DEA)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateContainer3() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="State Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol5 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#935dea] text-[19px] text-left">
          <p className="block leading-[1.3]">Now Playing</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication10() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[57.222%] left-[52.703%] right-[27.703%] rounded-md top-[35.556%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">The Defense Rests</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">The Dropout</p>
      </div>
      <StateContainer3 />
    </div>
  );
}

function RadioStationContainer() {
  return (
    <div
      className="absolute left-px top-[30.5px] w-[173px]"
      data-name="Radio Station Container"
    >
      <div className="box-border content-stretch flex flex-row gap-[3px] items-start justify-start p-0 relative w-[173px]">
        <div
          className="h-[16.462px] relative shrink-0 w-[13.377px]"
          data-name="Symbol"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 17"
          >
            <path
              d={svgPaths.p225f100}
              fill="var(--fill-0, #F2F2F2)"
              id="Symbol"
            />
          </svg>
        </div>
        <div className="flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f2f2] text-[18px] text-left w-[159px]">
          <p className="block leading-[normal]">Music 1</p>
        </div>
      </div>
    </div>
  );
}

function Symbol6() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <g id="Vector">
            <path d={svgPaths.p3862e400} fill="var(--fill-0, #E6434F)" />
            <path d={svgPaths.p29071600} fill="var(--fill-0, #E6434F)" />
            <path d={svgPaths.pab30a00} fill="var(--fill-0, #E6434F)" />
            <path d={svgPaths.p32c2b100} fill="var(--fill-0, #E6434F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateContainer4() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="State Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol6 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e6434f] text-[19px] text-left">
          <p className="block leading-[1.3]">Up Next</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication11() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[57.222%] left-[77.703%] right-[2.703%] rounded-md top-[35.556%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Smokin Out the Wi...</p>
      </div>
      <RadioStationContainer />
      <StateContainer4 />
    </div>
  );
}

function RectangularComplication12() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[40.556%] leading-[0] left-[2.703%] not-italic right-[77.703%] rounded-md text-left top-[52.222%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center left-0 opacity-60 text-[#f2f2f2] text-[18px] top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Tomorrow</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center left-0 text-[#f2f2f2] text-[18px] top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Book Camp Site</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] h-[19px] justify-center left-0 text-[#3b82f7] text-[0px] top-[17px] translate-y-[-50%] w-[173px]">
        <p className="leading-[1.3]">
          <span className="text-[19px]">3:00</span>
          <span className="text-[16px]">PM</span>
        </p>
      </div>
    </div>
  );
}

function Symbol7() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <path
            d={svgPaths.p39d88e00}
            fill="var(--fill-0, #F2A33C)"
            id="Symbol"
            stroke="var(--stroke-0, #F2A33C)"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer6() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol7 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2a33c] text-[19px] text-left">
          <p className="block leading-[1.3]">Stopwatch</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication13() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[40.556%] left-[27.703%] right-[52.703%] rounded-md top-[52.222%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-12 justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[40px] text-left top-[54px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">00:00.00</p>
      </div>
      <HeaderContainer6 />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div
      className="absolute h-3 left-px overflow-clip rounded-[50px] top-[56.5px] w-[171px]"
      data-name="Progress Bar"
    >
      <div
        className="absolute bg-[#f2a33c] h-3 left-0 opacity-30 rounded-[50px] top-0 w-[171px]"
        data-name="Shell"
      />
    </div>
  );
}

function Symbol8() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Symbol">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 19"
      >
        <g id="Symbol ">
          <g id="Symbol">
            <path d={svgPaths.p2a76a080} fill="var(--fill-0, #F2A33C)" />
            <path d={svgPaths.p36b1b540} fill="var(--fill-0, #F2A33C)" />
            <path
              d={svgPaths.p2a76a080}
              stroke="var(--stroke-0, #F2A33C)"
              strokeWidth="0.5"
            />
            <path
              d={svgPaths.p36b1b540}
              stroke="var(--stroke-0, #F2A33C)"
              strokeWidth="0.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer7() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <Symbol8 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2a33c] text-[19px] text-left">
          <p className="block leading-[1.3]">Set Timer</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication14() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[40.556%] left-[52.703%] right-[27.703%] rounded-md top-[52.222%]"
      data-name="Rectangular Complication"
    >
      <ProgressBar1 />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[0px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="leading-[normal]">
          <span className="text-[18px]">{`3 `}</span>
          <span className="text-[15px]">MINUTES</span>
        </p>
      </div>
      <HeaderContainer7 />
    </div>
  );
}

function GridLines2() {
  return (
    <div
      className="absolute contents left-px top-[21px]"
      data-name="Grid Lines"
    >
      <div
        className="absolute bg-[#403f40] h-[52px] left-px top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[35px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[68px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[103px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[136px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[171px] top-[21px] w-px"
        data-name="Grid Line"
      />
    </div>
  );
}

function Time2() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[7px] not-italic text-[#f2f2f2] text-[10px] text-center top-[65px]"
      data-name="Time"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[18px] top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">NOW</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">11AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">12PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[120px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">1PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[154px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">2PM</p>
      </div>
    </div>
  );
}

function Symbols() {
  return (
    <div
      className="absolute contents left-2 top-[39.683px]"
      data-name="Symbols"
    >
      <div
        className="absolute h-[15.63px] left-28 top-[39.683px] w-[15.608px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.pc061f00}
            fill="var(--fill-0, #FFE620)"
            id="Symbol"
          />
        </svg>
      </div>
      <div
        className="absolute h-[14.348px] left-36 top-[40.012px] w-[20.544px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 15"
        >
          <g id="Symbol">
            <path d={svgPaths.p20972800} fill="#F2F2F2" />
            <path d={svgPaths.p2b9d4300} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.pa7adb80} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1cb66640} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.peed6480} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1839b700} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p20062640} fill="var(--fill-0, #FFE620)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[14.348px] left-[76px] top-[40.012px] w-[20.544px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 15"
        >
          <g id="Symbol">
            <path d={svgPaths.p20972800} fill="#F2F2F2" />
            <path d={svgPaths.p2b9d4300} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.pa7adb80} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1cb66640} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.peed6480} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1839b700} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p20062640} fill="var(--fill-0, #FFE620)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[14.348px] left-[43px] top-[40.012px] w-[20.544px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 15"
        >
          <g id="Symbol">
            <path d={svgPaths.p20972800} fill="#F2F2F2" />
            <path d={svgPaths.p2b9d4300} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.pa7adb80} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1cb66640} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.peed6480} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1839b700} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p20062640} fill="var(--fill-0, #FFE620)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[14.348px] left-2 top-[40.012px] w-[20.544px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 15"
        >
          <g id="Symbol">
            <path d={svgPaths.p20972800} fill="#F2F2F2" />
            <path d={svgPaths.p2b9d4300} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.pa7adb80} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1cb66640} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.peed6480} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1839b700} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p20062640} fill="var(--fill-0, #FFE620)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Percentages() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-2 not-italic text-[#f2f2f2] text-[10px] text-center top-[21px]"
      data-name="Percentages"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">74°</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">84°</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[120px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">88°</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[154px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">86°</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[18px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">72°</p>
      </div>
    </div>
  );
}

function SymbolContainer3() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-4"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="Symbol Container">
          <path
            d={svgPaths.p1606d00}
            fill="var(--fill-0, #7CC7F3)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer8() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-[174px]">
        <SymbolContainer3 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2f2f2] text-[15px] text-left">
          <p className="leading-[1.3]">
            <span className="text-[#7cc7f3]">72°</span>
            <span>{` H:88° L:64°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication15() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[40.556%] left-[77.703%] overflow-clip right-[2.703%] rounded-md top-[52.222%]"
      data-name="Rectangular Complication"
    >
      <GridLines2 />
      <Time2 />
      <Symbols />
      <Percentages />
      <HeaderContainer8 />
    </div>
  );
}

function GridLines3() {
  return (
    <div
      className="absolute contents left-px top-[21px]"
      data-name="Grid Lines"
    >
      <div
        className="absolute bg-[#403f40] h-[52px] left-px top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[35px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[68px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[103px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[136px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[171px] top-[21px] w-px"
        data-name="Grid Line"
      />
    </div>
  );
}

function Time3() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[7px] not-italic text-[#f2f2f2] text-[10px] text-center top-[65px]"
      data-name="Time"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[18px] top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">NOW</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">11AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">12PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[120px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">1PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[154px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">2PM</p>
      </div>
    </div>
  );
}

function Symbols1() {
  return (
    <div
      className="absolute contents left-[10.28px] top-[39.426px]"
      data-name="Symbols"
    >
      <div
        className="absolute h-[15.63px] left-[146.192px] top-[39.683px] w-[15.608px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.pc061f00}
            fill="var(--fill-0, #FFE620)"
            id="Symbol"
          />
        </svg>
      </div>
      <div
        className="absolute h-[14.348px] left-[110.391px] top-[40.012px] w-[20.544px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 15"
        >
          <g id="Symbol">
            <path d={svgPaths.p20972800} fill="#F2F2F2" />
            <path d={svgPaths.p2b9d4300} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.pa7adb80} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1cb66640} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.peed6480} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p1839b700} fill="var(--fill-0, #FFE620)" />
            <path d={svgPaths.p20062640} fill="var(--fill-0, #FFE620)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[16.374px] left-[78.28px] top-[39.426px] w-[16.143px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <g id="Symbol">
            <path d={svgPaths.p3a150680} fill="#F2F2F2" />
            <path d={svgPaths.p210ab900} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p2ff8ffd0} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p2ec98a92} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p88e7e00} fill="var(--fill-0, #7CC7F3)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[16.353px] left-[44.28px] top-[39.426px] w-[16.143px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <g id="Symbol">
            <path d={svgPaths.p3a150680} fill="#F2F2F2" />
            <path d={svgPaths.p1a1bb100} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p2d4694c0} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p398ca00} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p10c01a00} fill="var(--fill-0, #7CC7F3)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[16.374px] left-[10.28px] top-[39.426px] w-[16.143px]"
        data-name="Symbol"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <g id="Symbol">
            <path d={svgPaths.p3a150680} fill="#F2F2F2" />
            <path d={svgPaths.p210ab900} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p2ff8ffd0} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p2ec98a92} fill="var(--fill-0, #7CC7F3)" />
            <path d={svgPaths.p88e7e00} fill="var(--fill-0, #7CC7F3)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Percentages1() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-2 not-italic text-[#f2f2f2] text-[10px] text-center top-[21px]"
      data-name="Percentages"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">30%</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">0%</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[120px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">0%</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[154px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">0%</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[18px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">60%</p>
      </div>
    </div>
  );
}

function SymbolContainer4() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-4"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="Symbol Container">
          <path
            d={svgPaths.p1606d00}
            fill="var(--fill-0, #7CC7F3)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer9() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-[174px]">
        <SymbolContainer4 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2f2f2] text-[15px] text-left">
          <p className="leading-[1.3]">
            <span className="text-[#7cc7f3]">60%</span>
            <span>{` CHANCE OF RAIN`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication16() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[23.889%] left-[2.703%] overflow-clip right-[77.703%] rounded-md top-[68.889%]"
      data-name="Rectangular Complication"
    >
      <GridLines3 />
      <Time3 />
      <Symbols1 />
      <Percentages1 />
      <HeaderContainer9 />
    </div>
  );
}

function YAxisLabels1() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-1 not-italic text-[#f2f2f2] text-[10px] text-center top-5"
      data-name="Y Axis Labels"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[9px] opacity-60 top-[24.5px] translate-x-[-50%] translate-y-[-50%] w-2.5">
        <p className="block leading-[normal]">11</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[9px] opacity-60 top-[59.5px] translate-x-[-50%] translate-y-[-50%] w-2.5">
        <p className="block leading-[normal]">0</p>
      </div>
    </div>
  );
}

function XAxisLabels() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[26px] not-italic text-[#f2f2f2] text-[10px] text-center top-[65px]"
      data-name="X Axis Labels"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[29px] top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">F</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[51px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">S</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[73px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">S</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[94.5px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">M</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[116.5px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">T</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[160.5px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">T</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[138.5px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-1.5">
        <p className="block leading-[normal]">W</p>
      </div>
    </div>
  );
}

function GridLines4() {
  return (
    <div
      className="absolute contents left-[18px] top-[21px]"
      data-name="Grid Lines"
    >
      <div
        className="absolute bg-[#403f40] h-[52px] left-[18px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[39px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[61px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[83px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[105px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[127px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[149px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[171px] top-[21px] w-px"
        data-name="Grid Line"
      />
    </div>
  );
}

function SaturdayChart() {
  return (
    <div
      className="absolute h-[42px] left-[22px] top-0 w-1.5"
      data-name="Saturday Chart"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[42px] left-0 opacity-30 rounded-[100px] top-0 w-1.5"
        data-name="Chart Background"
        style={{ backgroundImage: `url('${imgChartBackground}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-3 left-0 rounded-[100px] top-[30px] w-1.5"
        data-name="Chart Foreground"
        style={{ backgroundImage: `url('${imgChartForeground}')` }}
      />
    </div>
  );
}

function SundayChart() {
  return (
    <div
      className="absolute h-[42px] left-11 top-0 w-1.5"
      data-name="Sunday Chart"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[42px] left-0 opacity-30 rounded-[100px] top-0 w-1.5"
        data-name="Chart Background"
        style={{ backgroundImage: `url('${imgChartBackground}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-4 left-0 rounded-[100px] top-[26px] w-1.5"
        data-name="Chart Foreground"
        style={{ backgroundImage: `url('${imgChartForeground1}')` }}
      />
    </div>
  );
}

function WednesdayChart() {
  return (
    <div
      className="absolute h-[42px] left-[109.5px] top-0 w-1.5"
      data-name="Wednesday Chart"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[42px] left-0 opacity-30 rounded-[100px] top-0 w-1.5"
        data-name="Chart Background"
        style={{ backgroundImage: `url('${imgChartBackground}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-4 left-0 rounded-[100px] top-[26px] w-1.5"
        data-name="Chart Foreground"
        style={{ backgroundImage: `url('${imgChartForeground1}')` }}
      />
    </div>
  );
}

function MondayChart() {
  return (
    <div
      className="absolute h-[42px] left-[65.5px] top-0 w-1.5"
      data-name="Monday Chart"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[42px] left-0 opacity-30 rounded-[100px] top-0 w-1.5"
        data-name="Chart Background"
        style={{ backgroundImage: `url('${imgChartBackground}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[23px] left-0 rounded-[100px] top-[19px] w-1.5"
        data-name="Chart Foreground"
        style={{ backgroundImage: `url('${imgChartForeground2}')` }}
      />
    </div>
  );
}

function ThursdayChart() {
  return (
    <div
      className="absolute h-[42px] left-[131.5px] top-0 w-1.5"
      data-name="Thursday Chart"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[42px] left-0 opacity-30 rounded-[100px] top-0 w-1.5"
        data-name="Chart Background"
        style={{ backgroundImage: `url('${imgChartBackground}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-5 left-0 rounded-[100px] top-[22px] w-1.5"
        data-name="Chart Foreground"
        style={{ backgroundImage: `url('${imgChartForeground3}')` }}
      />
    </div>
  );
}

function TuesdayChart() {
  return (
    <div
      className="absolute h-[42px] left-[87.5px] top-0 w-1.5"
      data-name="Tuesday Chart"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[42px] left-0 opacity-30 rounded-[100px] top-0 w-1.5"
        data-name="Chart Background"
        style={{ backgroundImage: `url('${imgChartBackground}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[35px] left-0 rounded-[100px] top-[7px] w-1.5"
        data-name="Chart Foreground"
        style={{ backgroundImage: `url('${imgChartForeground4}')` }}
      />
    </div>
  );
}

function FridayChart() {
  return (
    <div
      className="absolute h-[42px] left-0 top-0 w-1.5"
      data-name="Friday Chart"
    >
      <div className="absolute bottom-0 left-[-19.17%] right-[-20.83%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 42"
        >
          <g id="Friday Chart">
            <rect
              fill="url(#paint0_linear_1_2857)"
              height="42"
              id="Chart Background"
              opacity="0.3"
              rx="3"
              width="6"
              x="2"
            />
            <rect
              fill="url(#paint1_linear_1_2857)"
              height="35"
              id="Chart Foreground"
              rx="3"
              width="6"
              x="2"
              y="7"
            />
            <circle
              cx="5.0498"
              cy="17.75"
              fill="var(--fill-0, #F2A33C)"
              id="Indicator"
              r="3.475"
              stroke="var(--stroke-0, black)"
              strokeWidth="1.45"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_2857"
              x1="5"
              x2="5.50408"
              y1="42"
              y2="0.0060501"
            >
              <stop offset="0.104167" stopColor="#68CE66" />
              <stop offset="0.375" stopColor="#FFE620" />
              <stop offset="0.614583" stopColor="#FF9500" />
              <stop offset="1" stopColor="#AA00FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1_2857"
              x1="5"
              x2="5.35007"
              y1="42"
              y2="7.0035"
            >
              <stop offset="0.104167" stopColor="#68CE66" />
              <stop offset="0.375" stopColor="#FFE620" />
              <stop offset="0.822917" stopColor="#D0378C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Charts() {
  return (
    <div
      className="absolute h-[42px] left-[26px] top-[21px] w-[137.5px]"
      data-name="Charts"
    >
      <SaturdayChart />
      <SundayChart />
      <WednesdayChart />
      <MondayChart />
      <ThursdayChart />
      <TuesdayChart />
      <FridayChart />
    </div>
  );
}

function SymbolContainer5() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-4"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="Symbol Container">
          <path
            d={svgPaths.p1606d00}
            fill="var(--fill-0, #7CC7F3)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer10() {
  return (
    <div className="absolute left-0 top-0" data-name="Header Container">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
        <SymbolContainer5 />
        <div className="flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f2f2] text-[15px] text-left w-[71px]">
          <p className="leading-[1.3]">
            <span className="text-[#7cc7f3]">UVI 6</span>
            <span>{` HIGH`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication17() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[23.889%] left-[27.703%] overflow-clip right-[52.703%] rounded-md top-[68.889%]"
      data-name="Rectangular Complication"
    >
      <YAxisLabels1 />
      <XAxisLabels />
      <GridLines4 />
      <Charts />
      <HeaderContainer10 />
    </div>
  );
}

function GridLines5() {
  return (
    <div
      className="absolute contents left-px top-[21px]"
      data-name="Grid Lines"
    >
      <div
        className="absolute bg-[#403f40] h-[52px] left-px top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[35px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[68px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[103px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[136px] top-[21px] w-px"
        data-name="Grid Line"
      />
      <div
        className="absolute bg-[#403f40] h-[52px] left-[171px] top-[21px] w-px"
        data-name="Grid Line"
      />
    </div>
  );
}

function Time4() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-[7px] not-italic text-[#f2f2f2] text-[10px] text-center top-[65px]"
      data-name="Time"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[18px] top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">NOW</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">11AM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">12PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[120px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">1PM</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[154px] opacity-60 top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="block leading-[normal]">2PM</p>
      </div>
    </div>
  );
}

function Speed() {
  return (
    <div
      className="absolute contents font-['SF_Pro_Rounded:Medium',_sans-serif] leading-[0] left-[7px] not-italic text-[#f2f2f2] text-[18px] text-center top-[39px]"
      data-name="Speed"
    >
      <div className="absolute flex flex-col h-[18px] justify-center left-[18px] top-12 translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">22</p>
      </div>
      <div className="absolute flex flex-col h-[18px] justify-center left-[52px] top-12 translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">9</p>
      </div>
      <div className="absolute flex flex-col h-[18px] justify-center left-[86px] top-12 translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">9</p>
      </div>
      <div className="absolute flex flex-col h-[18px] justify-center left-[120px] top-12 translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">7</p>
      </div>
      <div className="absolute flex flex-col h-[18px] justify-center left-[154px] top-12 translate-x-[-50%] translate-y-[-50%] w-[22px]">
        <p className="block leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Direction1() {
  return (
    <div
      className="absolute contents font-['SF_Compact_Rounded:Medium',_sans-serif] leading-[0] left-2 not-italic text-[#7cc7f3] text-[10px] text-center top-[21px]"
      data-name="Direction"
    >
      <div className="absolute flex flex-col h-[9px] justify-center left-[52px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">N</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[86px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">NW</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[120px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">NE</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[154px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <p className="block leading-[normal]">N</p>
      </div>
      <div className="absolute flex flex-col h-[9px] justify-center left-[18px] top-[25.5px] translate-x-[-50%] translate-y-[-50%] w-5">
        <p className="block leading-[normal]">NE</p>
      </div>
    </div>
  );
}

function SymbolContainer6() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-4"
      data-name="Symbol Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="Symbol Container">
          <path
            d={svgPaths.p1606d00}
            fill="var(--fill-0, #7CC7F3)"
            id="Symbol"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer11() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-[174px]">
        <SymbolContainer6 />
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2f2f2] text-[15px] text-left">
          <p className="leading-[1.3]">
            <span className="text-[#7cc7f3]">WIND NE</span>
            <span>{` 22 MPH`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication18() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[23.889%] left-[52.703%] overflow-clip right-[27.703%] rounded-md top-[68.889%]"
      data-name="Rectangular Complication"
    >
      <GridLines5 />
      <Time4 />
      <Speed />
      <Direction1 />
      <HeaderContainer11 />
    </div>
  );
}

function HeaderContainer12() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#bafd4f] text-[19px] text-left">
          <p className="block leading-[1.3]">Running</p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication19() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[23.889%] left-[77.703%] right-[2.703%] rounded-md top-[68.889%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Fri, September 23</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[18px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">3.10 miles</p>
      </div>
      <HeaderContainer12 />
    </div>
  );
}

function HeaderContainer13() {
  return (
    <div
      className="absolute left-0 top-[7.5px] w-[173px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative w-[173px]">
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Semibold',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2a33c] text-[0px] text-left">
          <p className="leading-[1.3] whitespace-pre-wrap">
            <span className="text-[19px]">{`Sunset  7:03`}</span>
            <span className="text-[16px]">PM</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication20() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[7.222%] left-[2.703%] right-[77.703%] rounded-md top-[85.556%]"
      data-name="Rectangular Complication"
    >
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic opacity-60 text-[#f2f2f2] text-[18px] text-left top-[61.5px] translate-y-[-50%] w-[174px]">
        <p className="block leading-[normal]">Cupertino, CA</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] h-[18px] justify-center leading-[0] left-0 not-italic text-[#f2f2f2] text-[0px] text-left top-[39.5px] translate-y-[-50%] w-[174px]">
        <p className="leading-[normal]">
          <span className="text-[18px]">8</span>
          <span className="text-[15px]">HR</span>
          <span className="text-[18px]">{` 53`}</span>
          <span className="text-[15px]">MIN</span>
        </p>
      </div>
      <HeaderContainer13 />
    </div>
  );
}

function HeaderContainer14() {
  return (
    <div
      className="absolute left-0 top-0 w-[174px]"
      data-name="Header Container"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-[174px]">
        <div className="basis-0 flex flex-col font-['SF_Compact_Rounded:Medium',_sans-serif] grow h-[19px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f2f2f2] text-[0px] text-left">
          <p className="leading-[1.3]">
            <span className="text-[#f2a33c] text-[15px]">CUP</span>
            <span className="text-[15px]">{` 7:09`}</span>
            <span className="text-[12px]">AM</span>
            <span className="text-[15px]">, -3</span>
            <span className="text-[12px]">HRS</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RectangularComplication21() {
  return (
    <div
      className="absolute bg-[#000000] bottom-[7.222%] left-[27.703%] overflow-clip right-[52.703%] rounded-md top-[85.556%]"
      data-name="Rectangular Complication"
    >
      <div
        className="absolute h-[51px] left-[6.375px] top-[22px] w-[160.794px]"
        data-name="World Map"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 161 51"
        >
          <g id="World Map">
            <path d={svgPaths.p8955f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p30807540} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3bec6080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1867c6f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e7c600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p376cc500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35163780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p68d7980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28e0ed00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfca0980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p10fdd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37e00680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cf4e180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2517880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p292c1a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e9f2380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12ea4770} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pecfb500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3cb46780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfdba000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p136c5540} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p34d99e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p23e78f80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2c05c770} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p29959bf0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f73c980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37703b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20802100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28f7b170} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1b24b600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p34067300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28a51d40} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e06c000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f174a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2234bd80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p49dc880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p167e51f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3283b100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2caffc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f30a300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13a09300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13927c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32b91df2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pf680a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p398d20f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3bfb9400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20e88d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8fbcd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p7456e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2491a480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25914480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p22049d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3b0f8f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f4fb500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p23948400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p187da500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25e4200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2decbfc0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21604b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfd8b8c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19659100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16bdcf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d85a500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1b077100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18989680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p48ef300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p379ec00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e8f3900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pafccff0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ff9d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc908f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25b57d80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p329ed230} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11b4800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2de73800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc66dd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24cc9c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b0ce400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p273ab100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2106a800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24c29e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d0c8840} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33511500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8be06b0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25b77800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37722300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ac23b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39428800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p174a9b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1a9a8600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25e9e000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bd51000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2155c2c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24f9e500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e2523d0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pafb7d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p96c980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d49df80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28729800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe349400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p22923c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12408e60} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e300500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e459600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27000d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d6b4e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pb151f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39da66f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd177b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p702900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2dfc7600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1249d500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f6abe00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6f12b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3c1b0d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cd88c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p277e00c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1dd43270} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cfbd600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p349cea00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16dfa880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1682f5c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31e94d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3daf0300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3abc9d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a822300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p225a5300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13734480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3052c080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38acec00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2de04900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ab54440} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd6ffc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f9a6d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a20b480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p30bbba80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3413b480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17141700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pdef8200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p853c000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21acb200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfef30f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p40a2100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p72f9800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b2f89f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p184f6680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15e66900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cb91a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p34709900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3897e370} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3ab7ae00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3895e300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6d9a9c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c73ea00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1d42c500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33cc1a0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5892800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3da23100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2c77cd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35790600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe620480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b6c3480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e399e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe8f1400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18b5f200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1a6a9600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f22ca70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p150f2e30} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pdd5c680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ae8e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p196a000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe099b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21c8a3f2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e509980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p116cca00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37811600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p256a8300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33372080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3bfa4b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe2d6f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e894280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27ae1400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38ef1780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p9649300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e79800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f9de000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p538b600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5798f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc2ec2f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe050a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2c7fc670} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21b5ef00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d9d6c40} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p179c4d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1faf2a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ae9fb80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p188e1800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e8487f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15642900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11744900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e69dc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1a2f5140} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3378fa00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a801800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b554700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p212dfb00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a8ba0f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2597e100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p401f2f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa207700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa7b0800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14566b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p844a300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13935a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35a7d800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17291e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2a74ac00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p772a080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e47c300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pcd2300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3cec82f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1688e730} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13bf7700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14b24580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p337d9300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p394ce100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2af7b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p324cd200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f54c900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a5284f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3157e1b2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2bed5700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p86e9100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p134359f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32269b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33ec1180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p62f3f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pb7b7980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pac30000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1beeb380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p4217a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2fc9ac80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe680980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31500c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1061ce00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p189da680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p90f0580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pcac6200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d836500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f419f60} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p191139f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p242a1e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd645800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3c53a900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c8eac00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p377cca00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ac12d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cbd1c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd299d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p161f4020} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1b99f9c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p224e4200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8e62140} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p130a8900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25cb8f80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pcbc3f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd936000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ddb8c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14372600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p211b7e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e854080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2a3e6b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p56a6400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2a83a540} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e487600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f132080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p368e3200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ae35080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5582500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f5c5500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e09fec0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2de20900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f1f5200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3ecc5400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p297fef00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p9393c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p34395c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p279c4200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd48cfc0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p161ccb00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p383e8b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pb281a80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5626b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25469a80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13e5ac00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15525500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pb084ec0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1d814580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f87ba00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p141529a0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e53440} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p208dd580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p576aa80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1df48b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pef49400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24f59000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p22983d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36945500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3b6a6400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31bb200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1403280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.ped7cd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33392780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37097d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd68a180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pf95480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bb202f1} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12e56e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p7214b40} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35e6900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1562b500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ccec980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc914f70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bcb6300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1aa44e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f2c6980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1fb069b0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p129ee500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p26a33f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfc1c500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b32ea00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p553de00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5485700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f112000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p157bfa00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p203e0a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d5a9e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p257f1280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p76b700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ea4900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d1c1400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1b8ddb00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2742f080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pbdefe80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32f2dff0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p160917c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3644f700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13d31680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1790b300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2372d880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b58d800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e798b70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cd05040} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5aec100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31a73c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18213580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3430e400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p23c3f600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pda16f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27eb4180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p134eea80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p284b1b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32e2cd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p106beff2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pb952e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pddddf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p380e200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p105dd380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p117ec700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p396a0200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p49bd900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37ac8b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p273da00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p179b7900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p30782f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd3c3700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14fb0720} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p106ebe00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13bb7880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39807e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16cad880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18525c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14eeb380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pf87b700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d995500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c4fac00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p61edf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20f04d80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p29ac99b0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14505200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3415b800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21645000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35df0b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18b3eb00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3b231280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1a548680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2eb100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28ab3800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20eb4e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27138500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bec5200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p29ca72f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2095c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p115bc660} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfe7a580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d014580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3da46280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8207100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39aff700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p201cd500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8d75900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p23fdce00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc37e600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33f48e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d51ba80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ba75480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2347d080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p26c7900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15ecc480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b866300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38683000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3489b500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p380fdf80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa4ba340} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cb9e400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p111ace00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ef4b100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfb43e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f5fd900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p375bbe80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5c6e300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19cd4080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc495a40} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f2abd80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1a8f0d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa8a6500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ae66800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32c71c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p258d2000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p4d77300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3ce4cf80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5d98900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d2751c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2186a080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3470480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pb05d680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1345b100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p66fcc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25e11500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p325cbc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p195458f2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31241b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20c62b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f7dcd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p185ad900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e062b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6fdc200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d05b000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21649400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e8dc100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15d63500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p390fcf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21277280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13e94c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2828c880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f517300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p114edd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38a2a800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11750100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d0ec780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2fd005f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2a20c040} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e3386f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc671fe1} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d6ce500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18896900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2a717400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2edc5640} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pda24b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.ped90b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f3dfd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd34cd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6e32ac0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11a6e180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p386114f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16d5ec00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1be37e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36ef9800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12eafb00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37911a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32d42a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24726000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12c6e700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ecb472} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2c7d7800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19979980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pf96b370} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p114f89c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p68ef00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28474700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3323e800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15621380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21255100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2975bd80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38aca000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p290a7d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p29cce400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p23c95180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d629078} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12ac9780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2406380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d820a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8f8d900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1b1e5c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16fbce80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p23500f80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p148a600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3cf77d80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36948d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31a64f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e66c300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11aead00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p92efe00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd2fd600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c65ce20} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p67b8600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p22b34300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p263f880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20ee43f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe77e900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17a34b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc2edd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pfaaa100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17efb500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1170c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3b7cea00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3ff82900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c10d100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31e33900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bab9200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2bc4c7f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19356100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11999700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p171dda00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17031800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p22905a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3055500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f0d1180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pcdc1880} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe52e680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2930eb80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1beb71b2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e076e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pf5eea00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19b16100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25118d80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p344e3d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p26875540} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p10f4ad40} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1844f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32e33500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d44d500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38188500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p9cea500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p367e0ff1} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6ee6a80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1aee8e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p9618800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21c9b500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p280bd800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1eb59100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2d694e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p119b17f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3c31eb70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd184a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6084d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38eea340} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1d322500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p70e4400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bc0ce80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p244eaf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p386d4300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p298e280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1d356400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39869af2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f48da80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3afaca80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35285f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1dd90600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f4e6ef2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c77f200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2885bef0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe68d380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18d64800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.paa1aef0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ce8b180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f1d280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pf701f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14abdc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p303a8b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37415700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p210c4c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16687400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3c25e480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ef0c900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1f357980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24cd7100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pea12180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15aad00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa36bc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3fb37800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17860b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p111c9600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35590100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1309d6c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p7602680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2cf18100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d249e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pdb24900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2a9ba100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2687df80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2552e000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p255068f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e4edc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14047400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b002980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f18bd80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8891c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p116dee80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e619c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p37d85400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2dcde100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3b3ab3c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35897e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16c9fc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1126d300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2045900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1e2b3800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p186e08f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3c8a4f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24a86ea0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p112a6c00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd6471f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12ccf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p13209df0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p227aad00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p374aec00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa384500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p7550a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17cc0280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p44aac80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p254d5180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12abcc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2bd78f80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1582ff70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39433520} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b3c1580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p354dfd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36f81e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p225ed80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2e39b50} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p10381700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2366f180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16eca5f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p831ef00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p379c1280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31f85b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p305ef280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a013800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14b92d80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p309c5e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2da49500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p95fac00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pdb30e70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35632300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p337bcf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36671800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p253ad780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p31c08500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3314df00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5779600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa637000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27b07400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19c61380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pcd35180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f54c780} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p7632180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32b1aa00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3450b480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p361c8e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12daaf00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p237b4580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p9795a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8fbf300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe074a0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2611180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.paa3af00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27de1f80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1fd44b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p28d48200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p278b3100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p20ac0e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1892ee00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e7af400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p257de200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p9f3d800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3785470} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24dab480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p29602980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3ee6c900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pca55580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p14458800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f5860c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p169bf000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p35679200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32adaa80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p370cfe00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p5b07680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1d68fc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3412d180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd2c4900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38b60980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1a448280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pda22b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pa6bfd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12b93600} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p12bb3200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p322a9280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p8529680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p236d35f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pad45c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd3d87f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3d908900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p22748b00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15a688f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p293fd400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32810500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2cf5dd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p19732c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p10599000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1afe8580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p21a19f2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33fc0272} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1ecfc500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3741df00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24b90800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1afb7a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p298c1d80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25da3800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p38a0ec00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27b03270} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24be84f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1fb6bd00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1be48c80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a6b4370} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1406de80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1291c300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p835bc00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p24c30d10} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p4520480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3430a280} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33c1fa00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pc83d300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e7cb400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1b21e200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p6c42e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17e85180} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p55a08c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36123f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3c2a5300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p17218f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b463000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3b981b80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2400cd80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p168a1800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1cdce800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1bbc9400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p18b72e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p30f7e200} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pd880900} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3f338300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p32c1b580} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11f4c4f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2350e080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pef05d00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p36313a00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ce451c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2b2b9100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pcf84f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1adc8400} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16c73980} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p27d64120} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p192b1f80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p7a23f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p233e3000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p4a500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2ace2080} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1173700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p29e93000} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2dd3e300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p34cb1e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3bbb7500} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p26f65100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p11936800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p16b06100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33bed800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p50b4700} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2f58800} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2394b100} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3a4c6480} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15bee300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pe80ad00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p25fc2f00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e5e62f0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2c9d4e00} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p122d8380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p361bbcf0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p39263f70} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p33f2e8c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p3e7346c0} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1c5673f2} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p2afa9e80} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p1309b380} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.pbeb8680} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p387a7300} fill="var(--fill-0, #BCBCBC)" />
            <path d={svgPaths.p15e24100} fill="var(--fill-0, #BCBCBC)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[52.486px] left-0 top-[20.514px] w-[174px]"
        data-name="Scrim"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 174 53"
        >
          <g id="Scrim" opacity="0.6">
            <path d={svgPaths.p12465800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1838f600} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[52px] left-1.5 top-[21px] w-[162px]"
        data-name="Divider"
      >
        <div className="absolute bottom-[-0.962%] left-0 right-0 top-[-0.962%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 162 54"
          >
            <path
              d={svgPaths.p1c03595c}
              id="Divider"
              stroke="var(--stroke-0, #8E8E93)"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute left-[25.4px] size-[5.5px] top-[31.5px]"
        data-name="Indicator"
      >
        <div className="absolute inset-[-18.182%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <circle
              cx="3.75"
              cy="3.75"
              fill="var(--fill-0, #F2A33C)"
              id="Indicator"
              r="3.25"
              stroke="var(--stroke-0, #F2F2F2)"
            />
          </svg>
        </div>
      </div>
      <HeaderContainer14 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Grid />
      <RectangularComplication />
      <RectangularComplication1 />
      <RectangularComplication2 />
      <RectangularComplication3 />
      <RectangularComplication4 />
      <RectangularComplication5 />
      <RectangularComplication6 />
      <RectangularComplication7 />
      <RectangularComplication8 />
      <RectangularComplication9 />
      <RectangularComplication10 />
      <RectangularComplication11 />
      <RectangularComplication12 />
      <RectangularComplication13 />
      <RectangularComplication14 />
      <RectangularComplication15 />
      <RectangularComplication16 />
      <RectangularComplication17 />
      <RectangularComplication18 />
      <RectangularComplication19 />
      <RectangularComplication20 />
      <RectangularComplication21 />
    </div>
  );
}