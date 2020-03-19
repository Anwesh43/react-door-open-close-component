import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Door from './Door'
import {useAnimatedScale, useDimension} from './hooks'

function App() {
  const {scale, start} = useAnimatedScale(0.02, 30)
  const {w, h, resize, disableResizing} = useDimension()
  useEffect(() => {
      resize()
      return () => disableResizing()
  })
  return (
    <div className="App">
      <Door w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
  );
}

export default App;
