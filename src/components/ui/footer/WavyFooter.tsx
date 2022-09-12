import { Waves1SVG } from "../../../assets";

export const WavyFooter = () => {
  return (
    <footer className="h-[10vh] bg-wavy-footer w-full">
      <Waves1SVG
        className="w-full"
        preserveAspectRatio="none"
        viewBox="0 0 300 100"
      />
    </footer>
  );
};
