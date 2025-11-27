import axios from 'axios'
const Action=()=>async(dispatch)=>{
    try{
        const Data=await axios.get("http://localhost:1234/getproduct")
        const res=Data.data
        dispatch({type:'success',payload:res})
    }catch(error){
        dispatch({type:'fail',payload:error.message})
    }
}
export default Action