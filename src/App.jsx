import React from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Meals from './components/Meals'
import ToggleBackgroundColor from './components/ToggleBackgroundColor'
import HiddenSearchBar from './components/HiddenSearchBar'
import Testimonials from './components/Testimonials'
import Accordion from './components/Accordion'
import {accordionData} from './utils/contetnt'

const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      <div className="accordion">
        {accordionData.map(({title,content})=>(
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  )
}

export default App