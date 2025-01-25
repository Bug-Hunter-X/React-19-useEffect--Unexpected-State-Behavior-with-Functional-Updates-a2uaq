# React 19 useEffect: Unexpected State Behavior with Functional Updates

This repository demonstrates a subtle bug in React 18 and 19 related to the use of functional updates within `useEffect` hooks.  The problem arises when a functional update depends on the previous state, but subsequent code in the same `useEffect` uses the old, unupdated state.

## Bug Description

The `bug.js` file contains a component that incorrectly uses a functional update within `useEffect`.  This leads to unexpected behavior where the subsequent code uses the older value of `count`.  This can manifest in different ways depending on the code that follows the state update within the same `useEffect`.

## Solution

The `bugSolution.js` file demonstrates the corrected approach.  To ensure that all the code operates on the updated state, we should chain all related updates sequentially or use the `useReducer` hook instead for more complex state management.