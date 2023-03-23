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
  let test1 = parseInt(document.getElementById('test1').value);
  let test2 = parseInt(document.getElementById('test2').value);

  // process
  let average = test1 * test2 /2;

  // output
  document.getElementById('average').innerHTML = 'Average is: ' + average + '%.'
}
