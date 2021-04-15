import NodePart1 from './NodePart1'
import NodePart2 from './NodePart2'
const Node = (props) => {
    return (
      <div>
        <h1>{props.nodeCurso}</h1>
        <NodePart1 part={props.part1} exercises={props.exercises1}/>
        <NodePart2 part={props.part2} exercises={props.exercises2}/>
      </div>
    )
  }
  export default Node