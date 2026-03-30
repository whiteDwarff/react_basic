import { Fragment } from 'react';

import CourseItem from './CourseItem';
import Card from './Card'

export default function CourseList({ title, items }) {

  const lastIndex = items.length - 1;
  return (
    <>
    <Card title={title}>
      <div className='courses'>
        {items.map((item, i) =>  (
          /*
          * 반목문 내에서 여러개의 요소를 반환해야할때는 Fragment를 사용!!
          * 반복문을 통해 생성되는 요소는 고유한 Key값이 필요
          */
          <Fragment key={item.id} >
            <CourseItem {...item} />
            { i < lastIndex && <hr className="divider" /> }
          </Fragment>
        ))}
      </div>
    </Card>
    </>
  );
}
