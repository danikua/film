import React from "react";
// helpers
import { calcTime, convertMoney } from "../../helpers";

import { Wrapper, Content } from "./MovieInfoBar.styles";

export const MovieInfoBar = ({time, budget, revenue}) => {
  return (
    <Wrapper>
      <Content>
        <div>
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div>
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div>
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  )
};