import { Play } from "phosphor-react";
import { CountDown, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCoutdownButton, TaskInput } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="De um nome para o seu projeto"/>

          <label htmlFor="">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00"/>
          <span>minutos.</span>
        </FormContainer>

        <CountDown>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDown>

        <StartCoutdownButton disabled type="submit">
            <Play size={24}/>
            Começar
            </StartCoutdownButton>
      </form>
    </HomeContainer>
  );
}
