import * as React from 'react';
import SVG from 'react-inlinesvg';

export interface SVGLoaderProps {
  imageSrc: string;
  className?: string;
}

export const SVGLoader: React.FunctionComponent<SVGLoaderProps> = ({ imageSrc, className }) => (
  <SVG src={imageSrc} className={className} cacheGetRequests={true} />
);
