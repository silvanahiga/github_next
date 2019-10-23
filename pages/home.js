import React from "react"
import Link from  "next/link"


class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          value:""
        }
      }

    handleChange(e){
        console.log(e.target.value)
        const data = e.target.value

        this.setState({
            value:data
        })
    }


    

    render(){
        return(
            <div>
                <h1>GITHUB SEARCH</h1>
                <input placeholder="buscar" onChange={(e)=>this.handleChange(e)}></input>
                <Link href={`/profile?name=${this.state.value}`} as={`/profile/${this.state.value}`}><button onClick={(e)=> this.handleClick(e)}>buscar</button></Link> 

            </div>
        )
    }
}

export default Home