import React from "react";
import { useEffect, useState } from "react";

function Gallery() {
  const [posts, setposts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((data) => {
        setposts(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div class="row">
          <h1>Photos</h1>
          {posts ? (
            <>
              <div className="row">
                {posts.map((post) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-12 mb-3">
                        <div class="card">
                          <img src={post.url} class="card-img-top" alt="" />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <div class="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Gallery;
