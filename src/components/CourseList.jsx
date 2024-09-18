function CourseList(){
    return(
      <div className="course-list">
      <div className="course-item">
        <div className="course-item__img">
          <img src="/images/img1.jpg" alt="image-1" />
        </div>
        <div className="course-item__detail">
          <div className="course-item__body">
            <div>
              <p className="title">React.js course</p>
              <p className="desc">The Ultimate React And Redux Course</p>
            </div>
            <span className="rate">4</span>
          </div>
          <div className="course-item__footer">
            <div className="tags">
              <span className="badge badge--secondary">React.js</span>
              <span className="badge badge--secondary">Frontend</span>
            </div>
            <div className="caption">
              <div className="date">
                {new Date().toLocaleDateString("en-US",
                  {month:"short",
                  year:"numeric",
                  day:"numeric",
                  })}
              </div>
              <p className="badge badge--primary">complete</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    )
  }
  export default CourseList;