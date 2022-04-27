import React, {FC, SVGAttributes} from 'react';
import './importAllIcons';
import './icon.scss';

interface Props extends SVGAttributes<SVGSVGElement> {
  name: string;
}

const Icon: FC<Props> = ({name, className, ...restProps}) => {
  return (
    <svg className={`wui-icon ${className}`}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
