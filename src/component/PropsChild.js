import React from "react";

    // 1. 객체 형태로 전달된 경우
    export default function PropsChild(props){
        const {oh, park, jung} = props.salaries; // 구조분해
        const maxSalary = Math.max(oh,park,jung); // 최대값

    // 2. 배열 형태로 전달된 경우
    /*
    export default function PropsChild({ salaries }){
    const [oh, park, jung] = salaries; // 배열로 구조 분해
    let maxSalary = 0;
    */

    // 최대값
    /*
    for (let key in salaries) {
        if(salaries[key] > maxSalary){
            maxSalary = salaries[key];
        }
    }
    */

    return(
        <div>
            <h2>{oh}</h2>
            <h2>{park}</h2>
            <h2>{jung}</h2>
            <br />
            <h2>최대값: {maxSalary}</h2>
        </div>
    );
}