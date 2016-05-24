/*
Chart Component
*/
import React from 'react';
import {Component} from 'react';
import {Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {
  return (
    <Sparklines height={300} width={150} data={props.data}>
       <SparklinesBars  />
       <SparklinesReferenceLine type="mean" />
    </Sparklines>
  )




}
