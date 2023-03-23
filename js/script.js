// Copyright (c) 2022 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the average
 */
function calculate () {
  // input
  let test1 = parseFloat(document.getElementById('test1').value);
  let test2 = parseFloat(document.getElementById('test2').value);

  // process
  let average = test1 * test2 /2;

  // output
  document.getElementById('average').innerHTML = 'Average is: ' + average + '%.
}

/**
 * This function calculates the range
 */
function calculate () {
  // input
  let test1 = parseFloat(document.getElementById('test1').value);
  let test2 = parseFloat(document.getElementById('test2').value);

  // process
  let range = test1 - test2;

  // output
  document.getElementById('range').innerHTML = 'Range is: ' + Math.abs(range) + '.'
}

