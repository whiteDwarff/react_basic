function HeartIconBtn({ onClick, isFavorite = true }) {
  /*
  * 함수를 실행시키는 것이 아닌 전달
  * handleFavorite() -> 실행
  * handleFavorite   -> 전달
  */
  return (
    // <button className="btn" onClick={() => alert('hello')}>
    <button className="btn" onClick={onClick}>
      <img className="btn__img" src={
        `img/heart-${isFavorite ? 'fill-' : ''}icon.svg`
      } alt="좋아요" />
    </button>
  )
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
  function handleHeartClick(e) {
    console.log(e);
    // 이벤트 버블링 제어
    e.stopPropagation();
    alert(course.isFavorite ? '좋아요' : '모르겠어요');
  }

  function handleItemClick(e) {
    e.stopPropagation();
    window.open(course.link, '_blank')
  }

  return (
    <>
      {/* 
        이벤트 버블링      : 자식에서 발생한 이벤트가 부모로 전파되는 현상
        onClickCapture : 이벤트 버블링을 막는다
      */}
      <article 
        onClick={handleItemClick}
        className='course' 
      >
        <img className='course__img' src={course.thumbnail} alt={course.title} />
        <div className='course__body'>
          <div className='course__title'>
            {course.title}
          </div>
          <div className='course__description'>
            {course.description}
          </div>
          <div className="course__icons">
            <HeartIconBtn 
              isFavorite={course.isFavorite} 
              onClick={handleHeartClick}
            />
            { course.link && <LinkIconBtn link={course.link} />}
          </div>
        </div>
      </article>
    </>
  );
}
