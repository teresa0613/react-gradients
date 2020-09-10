import React from 'react'
import gradients from "../gradients"
import Gradient from "../components/Gradient/index"

const GradientsList = (props) => {
    const { list } = props;
    console.log("list", list);
    return (
      <ul className="row list-unstyled">
        {list.map((el) => {
          console.log("el", el);
          return (
            <Gradient
              key={el.name}
              name={el.name}
              colorStart={el.start}
              colorEnd={el.end}
            />
          );
        })}
      </ul>
    );
  };

export default GradientsList