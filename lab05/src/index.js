import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Course from './Components/Course'

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const total = courses[0].parts.reduce((s, p) => {
    return s += p.exercises;
  },0);

  return <Course course={courses[0]} total={total} cursoNode={courses[1]} />
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)