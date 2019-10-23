import React from "react"
import axios from "axios";



class Profile extends React.Component {
  

  static async getInitialProps({ req, query }) {
    let name;
    if (req) {
      name = req.params.name  //servidors
    } else {
      name = query.name
    }

    const user = await axios.get(`https://api.github.com/users/${name}`)
    const repositories = await axios.get(`https://api.github.com/users/${name}/repos`)
    console.log(user)

    return {
      user: user.data,  //axios devuelve todo dentro de data  //aca retornamos user porque es la info que vamos a usar
      repositories: repositories.data

    } 
  }
  render() {
    console.log(this.props.user)
    return (
      <div>
        <h1>datos {this.props.user.name}</h1>
        

        <img src={this.props.user.avatar_url}></img>
        <p>repositorios</p>
        {this.props.repositories.slice(0,6).map((r)=><p>{r.name}</p>)}
       

      </div>
    )
  }
}

export default Profile