import PropTypes from 'prop-types';
import Amir from './Amir';

// const TestProps=(props)=>{
const TestProps=({name,age,tab,obj,handleYaakoub,handleName,children,show})=>{
    // console.log(props)
    const {town, codePo,track} = obj
    return(
        <div>
            <Amir name={name}/>
            {/* <h1>WS Props</h1>
            <h2>My name is {props.name}</h2>
            <h2>I am {props.age}</h2> */}
            {/* <ul>
                <li>{props.tab[0]}</li>
                <li>{props.tab[1]}</li>
            </ul> */}
            {/* <ul>
                {
                    props.tab.map((el,i,t)=> <li>{el}</li>)
                }
            </ul>
            <h3>{props.obj.town}</h3>
            <h3>{props.obj.codePo}</h3>
            <h3>{props.obj.track.s}</h3> */}

            <h1>WS Props</h1>
            <h2>My name is {name}</h2>
            <h2>I am {age}</h2>
            {/* <ul>
                <li>{props.tab[0]}</li>
                <li>{props.tab[1]}</li>
            </ul> */}
            <ul>
                {
                    tab.map((el,i,t)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h3>{town}</h3>
            <h3>{codePo}</h3>
            <h3>{track.s}</h3>
            
            {
                children
            }

            {
                show ?
                <button onClick={handleYaakoub}>Alert</button>
                :
                <button onClick={()=>handleName('Mahmoud')}>AlertName</button>
            }

            
            
        </div>
    )
}

TestProps.defaultProps ={
    name : 'Chigui',
    age : 1000,
    show : false
}

TestProps.propTypes = {
  
    name: PropTypes.string,
    age : PropTypes.number,
    show : PropTypes.bool   

}

export default TestProps