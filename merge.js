"use strict";

function merge(arr1, arr2) {
  let result = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    if (arr1[arr1Idx] <= arr2[arr2Idx]) {
      result.push(arr1[arr1Idx]);
      arr1Idx++;
    } else {
      result.push(arr2[arr2Idx]);
      arr2Idx++;
    }
  }

  // arr1Idx === arr1.length ? result.push(...arr2.slice(arr2Idx)) : result.push(...arr1.slice(arr1Idx));
  // result.push(arr1Idx === arr1.length ? ...arr2.slice(arr2Idx) : ...arr1.slice(arr1Idx));

  if (arr1Idx === arr1.length) {
    for (let i = arr2Idx; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  } else {
    for (let i = arr1Idx; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }

  return result
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let half = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half));

  return merge(left, right);
}

module.exports = { merge, mergeSort};