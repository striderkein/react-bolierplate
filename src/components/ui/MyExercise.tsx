import type { FC } from 'react'
// import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { SquareButton } from 'components'
// import bgBodyRecord from '/images/btn-body-record.jpg'

export const MyExercise: FC = () => {
  return (
    // <BrowserRouter>
    <div className='my-exercise'>
      <header className='exercise-header'><span className='exercise-title'>MY EXERCISE</span><span className='exercise-date'>2021.05.21</span></header>
      <ul className='my-exercise-list'>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
        <li>
          <span className='exercise-type'>家事全般</span><span className='exercise-duration'>10 min</span>
          <div className='exercise-calory'>26 kcal</div>
        </li>
      </ul>
    </div>
  )
}
