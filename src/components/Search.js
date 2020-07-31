
import React from 'react';

export const Search = (props) => {
  return (
    <form className="search-form col-12" onSubmit={props.on_search}>
      <input className="search-form__input" type="text" name="search" placeholder="Search for gifs here" />
      <button className="search-form__button">Search</button>
    </form>
  );
}
