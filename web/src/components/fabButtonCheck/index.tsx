import React from 'react';
import { FiEdit } from 'react-icons/fi';

import { Button } from './styles'

interface ParamTypes {
  disabledButton: string;
}

const FabButtonEdit: React.FC<ParamTypes> = ({ disabledButton }) => {

  return (
    <Button style={{ display: disabledButton }}>
      <FiEdit size={25}></FiEdit>
    </Button>

  )
}

export default FabButtonEdit;
