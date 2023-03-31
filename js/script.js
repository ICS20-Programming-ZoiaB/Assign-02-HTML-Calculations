// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the average and range
 */
function calculate () {
  // input
  let test1 = parseFloat(document.getElementById('test1').value);
  let test2 = parseFloat(document.getElementById('test2').value);

  // process
  let total = test1 + test2;
  let average = total /2;
  let range = test1 - test2;

  // output
  document.getElementById('average').innerHTML = 'Average is: ' + average.toFixed(2) + '%.'
  // output
  document.getElementById('range').innerHTML = 'Range is: ' + Math.abs(range).toFixed(2) + '.'
}
