function HeaderIconBtn({ isFavorite = true }) {
  if (isFavorite) {
    return (
      <button className="btn">
        <img className="icon-heart" src="img/heart-fill-icon.svg" alt="좋아요" />
      </button>
    );
  }
  return (
    <button className="btn">
      <img className="icon-heart" src="img/heart-icon.svg" alt="좋아요" />
    </button>
  );
  // 아무것도 반환하지 않는 경우 
  // return null;
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" />
    </a>
  )
}

export default function CourseItem(course) {
  return (
    <>
      <article className='course'>
        <img className='course__img' src={course.thumbnail} alt={course.title} />
        <div className='course__body'>
          <div className='course__title'>
            {course.title}
          </div>
          <div className='course__description'>
            {course.description}
          </div>
          <div className="course__icons">
            {/* <HeaderIconBtn isFavorite={course.isFavorite} /> */}
            <button className="btn">
              <img className="btn__img" src={
                `img/heart-${course.isFavorite ? 'fill-' : ''}icon.svg`
              } alt="좋아요" />
            </button>
            { course.link && <LinkIconBtn link={course.link} />}
            {/* { course.link && (
              <a className="btn" href={course.link} target="_blank" rel="noreferrer">
                <img className="btn__img" src="/img/link-icon.svg" />
              </a>
            )} */}
          </div>
        </div>
      </article>
    </>
  );
}
