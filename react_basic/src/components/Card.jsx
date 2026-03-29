/**
 * children : vue 기준 slot 개념과 같다
 * {children}자리에 ui가 들어감
 */
export default function Card({ title, children }) {
  return (
      <div className='card'>
        <div className='card__header'>{title}</div>
        <div className='card__body'>
          {children}
        </div>
      </div>
  )
}
