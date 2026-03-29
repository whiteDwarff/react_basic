import CourseItem from './CourseItem';
import Card from './Card'

export default function CourseList({ items }) {

  return (
    <>
    <Card title="강의 목록">
      <div className='courses'>
        { 
          items.map((item, index) => (
            <CourseItem key={index} {...item} />
          ))
        }
      </div>
    </Card>
    </>
  );
}
