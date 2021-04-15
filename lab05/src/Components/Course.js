import Part1 from './Content/Part1'
import Part2 from './Content/Part2'
import Part3 from './Content/Part3'
import Node from './Content/Node'
const Course = (props) => {
    return (
        <div>   
        <Part1 part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
        <Part2 part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
        <Part3 part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
        <Node nodeCurso={props.cursoNode.name} exercises1={props.cursoNode.parts[0].exercises} exercises2={props.cursoNode.parts[1].exercises} part1={props.cursoNode.parts[0].name} part2={props.cursoNode.parts[1].name} />

        <h2>Total exercises: {props.total}</h2>
      </div>
    )
  }
  export default Course