import React, {FC} from 'react';

interface Props {
  name: string;
}

const Icon: FC<Props> = ({name}) => {
  return (
    <span>icon-{name}</span>
  );
};

export default Icon;
