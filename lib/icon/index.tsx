import React, {FC} from 'react';
import './importAllIcons';
import './icon.scss';

interface Props {
  name: string;
}

const Icon: FC<Props> = ({name}) => {
  return (
    <svg className="wui-icon">
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
