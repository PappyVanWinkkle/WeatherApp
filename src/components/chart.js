/*
Chart Component
*/
import _ from 'lodash';
import React from 'react';
import {Component} from 'react';
import {Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
    <Sparklines height={300} width={150} data={props.data}>
       <SparklinesBars  />
       <SparklinesReferenceLine type="mean" />
    </Sparklines>
    <div>{average(props.data)}</div>
    </div>
  )
}
