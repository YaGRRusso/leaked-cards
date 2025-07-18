/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: this component is necessary */
import type { AnchorHTMLAttributes, FC } from 'react';

export interface CommonTransProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const CommonTrans: FC<CommonTransProps> = ({ children, ...rest }) => {
  return (
    <span dangerouslySetInnerHTML={{ __html: children as string }} {...rest} />
  );
};

CommonTrans.displayName = 'CommonTrans';
