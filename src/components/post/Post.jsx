import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://captainkimo.s3.amazonaws.com/wp-content/uploads/2016/09/22211618/Pine-Glades-Wetlands-Natural-Area-Sunset-Square.jpg" alt=""  />
    <div className="postInfo">
    <div className="postCats">
      <span className="postCat">Music</span>
      <span className="postCat">Life</span>
    </div>
    <span className="postTitle">Lorem, ipsum dolor sit amet.</span>
    <hr />
    <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis est maxime iure doloremque enim officiis praesentium cumque perspiciatis beatae. Cum cupiditate voluptatum veniam vitae tempore nam dicta sapiente alias.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis est maxime iure doloremque enim officiis praesentium cumque perspiciatis beatae. Cum cupiditate voluptatum veniam vitae tempore nam dicta sapiente alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis est maxime iure doloremque enim officiis praesentium cumque perspiciatis beatae. Cum cupiditate voluptatum veniam vitae tempore nam dicta sapiente alias.
    </p>
    </div>
  )
}
