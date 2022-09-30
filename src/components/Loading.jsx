import BeatLoader from "react-spinners/BeatLoader"
export default function (){ 
    return <div id='Loading-spinner' style={{height:"80vh"}} className= 'is-flex is-justify-content-center is-align-items-center is-fullheight '> 
       <BeatLoader color={'#ef6b3b'} loading={true} size={50} />  
       </div> 
    
}