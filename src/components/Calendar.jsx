import * as React from 'react';
import {Context} from '../contexts/MovieContext';

const Calendar = () => {
    const {states, actions} = React.useContext(Context);
    return(
        <div className="">
            Released between:
            <div className="dropdown">
                <span className="dropdown-button">{states.startDate.substring(0,4)}</span>
                <div className="dropdown-content">
                    {
                        [...Array(122).keys()].map(i => {
                            return <div key={i} >
                                <button onClick={
                                    () => {
                                        actions.setStartDate(Math.min((i + 1900),parseInt(states.endDate.substring(0,4)))+"-01-01");
                                    }
                                }>
                                    {i + 1900}
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
            to
            <div className="dropdown">
                <span className="dropdown-button">{states.endDate.substring(0,4)}</span>
                <div className="dropdown-content">
                    {
                        [...Array(122).keys()].map(i => {
                            return <div key={i}>
                                <button  onClick={
                                    () => {
                                        actions.setEndDate(Math.max((i + 1900),parseInt(states.startDate.substring(0,4)))+"-01-01");
                                    }
                                }>
                                    {i + 1900}
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Calendar;