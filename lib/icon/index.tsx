import React, {FC, MouseEventHandler} from 'react';
import './importAllIcons';
import './icon.scss';

interface Props {
  name: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Icon: FC<Props> = ({name, onClick}) => {
  return (
    <svg className="wui-icon" onClick={onClick}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
