import { Fab } from '@material-ui/core';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

// import { Container } from './styles';

const FabButtonAdd: React.FC = () => {
  return (
    <Fab style={{ backgroundColor: "#145DA0" }} aria-label="add" size="large">
      <FiPlus size={35} color="#fff"></FiPlus>
    </Fab>
  )
}

export default FabButtonAdd;
