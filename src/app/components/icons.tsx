import type { SVGProps } from 'react';

export type InlineIconName =
  | 'userTimes'
  | 'tools'
  | 'moneyBill'
  | 'building'
  | 'balanceScale'
  | 'draftingCompass'
  | 'bolt'
  | 'chartLine'
  | 'fileContract'
  | 'ownersHistory'
  | 'ownersFileContract'
  | 'ownersTools';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const strokeIcon = (
  paths: JSX.Element[],
  overrides: Partial<SVGProps<SVGSVGElement>> = {},
): IconComponent =>
  function StrokeIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...overrides}
        {...props}
      >
        {paths}
      </svg>
    );
  };

const icons: Record<InlineIconName, IconComponent> = {
  userTimes: strokeIcon([
    <circle key="c" cx="9" cy="7" r="3" />, 
    <path key="p1" d="M4.5 18.5c0-3 2.6-5.5 5.5-5.5h2c2.9 0 5.5 2.5 5.5 5.5" />, 
    <path key="p2" d="M16.5 6.5l4 4m0-4-4 4" />,
  ]),
  tools: strokeIcon([
    <path key="p1" d="M4.5 5.2l4.8 4.8" />, 
    <path key="p2" d="M5 13l6.4 6.4a2 2 0 0 0 2.8 0 2 2 0 0 0 0-2.8L8.2 10" />, 
    <path key="p3" d="M14.1 4.4l2-2 3 3-2 2" />, 
    <path key="p4" d="M12.6 5.9l3.5 3.5" />,
  ]),
  moneyBill: strokeIcon([
    <rect key="r" x="3.5" y="6.5" width="17" height="11" rx="2.5" ry="2.5" />, 
    <circle key="c" cx="12" cy="12" r="2.8" />, 
    <path key="p1" d="M7 9.5v0" />, 
    <path key="p2" d="M17 14.5v0" />,
  ]),
  building: strokeIcon([
    <rect key="r" x="6.5" y="3.5" width="11" height="17" rx="1.5" />, 
    <path key="p1" d="M9.5 7.5h5" />, 
    <path key="p2" d="M9.5 11.5h5" />, 
    <path key="p3" d="M9.5 15.5h5" />, 
    <path key="p4" d="M6.5 17.5h11" />,
  ]),
  balanceScale: strokeIcon([
    <path key="p1" d="M12 4v15" />, 
    <path key="p2" d="M7 9h10" />, 
    <path key="p3" d="M5 9l-2.5 5.5h5z" />, 
    <path key="p4" d="M19 9l-2.5 5.5h5z" />, 
    <path key="p5" d="M9 19h6" />,
  ]),
  draftingCompass: strokeIcon([
    <circle key="c" cx="12" cy="6" r="2.2" />, 
    <path key="p1" d="M12 8.5 7.5 19.5" />, 
    <path key="p2" d="M12 8.5 16.5 19.5" />, 
    <path key="p3" d="M8.5 14.5h7" />, 
    <path key="p4" d="M9.5 11.5l1.5-3" />, 
    <path key="p5" d="M14.5 11.5l-1.5-3" />,
  ]),
  bolt: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M13 2 6 12h5l-1 10 7-10h-5z" />
    </svg>
  ),
  chartLine: strokeIcon([
    <path key="p1" d="M4 19h16" />, 
    <path key="p2" d="M4 17l5-5 3 3 6-8" />,
  ]),
  fileContract: strokeIcon([
    <path key="p1" d="M9 3.5h6l3.5 3.5v13H9A2.5 2.5 0 0 1 6.5 17.5v-11A3 3 0 0 1 9 3.5z" />, 
    <path key="p2" d="M15 3.5v4h4" />, 
    <path key="p3" d="M9.5 11.5h5" />, 
    <path key="p4" d="M9.5 15.5h3" />, 
    <path key="p5" d="M9.5 7.5h2.5" />,
  ]),
  ownersHistory: strokeIcon(
    [
      <path key="p1" d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3" />, 
      <path key="p2" d="M4.5 8v4h4" />, 
      <path key="p3" d="M12 8v4l2.8 1.6" />,
    ],
    { strokeWidth: 1.6 },
  ),
  ownersFileContract: strokeIcon(
    [
      <path key="p1" d="M8.5 3.5h7l3 3v13h-10A2.5 2.5 0 0 1 6 17V6a2.5 2.5 0 0 1 2.5-2.5z" />, 
      <path key="p2" d="M15.5 3.5V7h3.5" />, 
      <path key="p3" d="M9.5 11.5h6" />, 
      <path key="p4" d="M9.5 15h3.5" />, 
      <path key="p5" d="M9.2 12.8l1.6 1.6 3.2-3.2" />,
    ],
    { strokeWidth: 1.6 },
  ),
  ownersTools: strokeIcon(
    [
      <path key="p1" d="M15.5 4.5l4 4-2.5 2.5-4-4" />, 
      <path key="p2" d="M14 7l-7 7v3L4.5 19.5" />, 
      <path key="p3" d="M7 14l-3-3 2-2 3 3" />,
    ],
    { strokeWidth: 1.6 },
  ),
};

export function InlineIcon({
  name,
  className,
  baseClassName = 'inline-icon',
  svgProps,
}: {
  name: InlineIconName;
  className?: string;
  baseClassName?: string;
  svgProps?: SVGProps<SVGSVGElement>;
}) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  const combinedClassName = [baseClassName, className].filter(Boolean).join(' ');

  return <IconComponent className={combinedClassName} {...svgProps} />;
}
