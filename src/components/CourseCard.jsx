function CourseCard({course}){
    return(
        <div className="course-item">
        <div className="course-item__img">
          <img src={course.imageUrl} alt={course.title} />
        </div>
        <div className="course-item__detail">
          <CourseCardBody 
            title={course.title}
            description={course.description}
            rate={course.rate}
           />
          <CourseCardFooter course={course}/> 
        </div>
        </div>
    )
}
export default CourseCard;

function CourseCardBody({title,description,rate}) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  )
}


function CourseCardFooter({course}) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {
          course.tags.map((t)=> ( 
          <span key={t} className="badge badge--secondary">
            Frontend
            </span>
            ))
        }
              
      </div>
      <div className="caption">
        <div className="date">
          {new Date(course.start).toLocaleDateString("en-US",
            {month:"short",
            year:"numeric",
            day:"numeric",
            })}
        </div>
        <p className="badge badge--primary">{course.status}</p>
      </div>       
    </div>
  )
}





