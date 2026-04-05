import './App.css'
import PullUpImpure from './components/PullUpImpure'
import PullUpPure from './components/PullUpPure'

export default function AppPure(props) {
  return (
    <div>
      <PullUpPure counter={10} />
      <PullUpPure counter={11} />
      <PullUpPure counter={12} />

      {/* <PullUpImpure />
      <PullUpImpure />
      <PullUpImpure /> */}
      Hello!
    </div>
  )
}
