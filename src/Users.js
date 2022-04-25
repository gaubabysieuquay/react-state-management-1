import React, { Component } from "react";

const favoriteMovie = (props) => {
  return props.profiles.map((item, index)=> ({
    id: index,
    user: props.users[item.userID].name,
    movie: props.movies[item.favoriteMovieID].name
  }))
}

export default class Users extends Component {
  
  render() {
    return (
      <ol>
        {favoriteMovie(this.props).map(item => (
           <li key={item.id}>
             <p>{item.user}'s favorite movie is {item.movie}</p>
           </li>
        ))}
      </ol>
    );
  }
}
