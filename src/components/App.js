import React from 'react';
import Filters from './Filters';
import Card from './Card';

export default function App() {
  return (
    <div id='wrapper'>
      <Filters/>
      <div id='feed'>
        <Card/>
      </div>
    </div>
  )
}