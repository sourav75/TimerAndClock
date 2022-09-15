// setInterval not working as expect, some problem in actioncreator due to async issue

import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const fetchPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const changeHandle = (e) => {
    setSearch(e.target.value);
    if (e.target.value != '') {
      const arr = posts.filter((item) => {
        if (item.title.indexOf(search) != -1) return item;
      });
      setPosts(arr);
    } else {
      fetchPost();
    }
  };
  return (
    <>
      <ul>
        {posts.map((item) => {
          return (
            <li>
              <h4>{item.id}</h4>
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        name="search"
        id="search"
        onInput={changeHandle}
      ></input>
    </>
  );
};

export default Posts;
