import React from 'react'
import { useDynamicTitle } from '../../hooks/useDynamicTitle';

function FitnessComponents() {
  useDynamicTitle("Dashboard | Fitness");
  return (
    <div>FitnessComponents</div>
  )
}

export default FitnessComponents