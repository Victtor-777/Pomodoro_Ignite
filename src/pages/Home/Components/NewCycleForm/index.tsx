import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">I will work in</label>
      <TaskInput
        id="task"
        type="text"
        list="task_suggestions"
        disabled={!!activeCycle}
        placeholder="Give a name to your project"
        {...register("task")}
      />

      <datalist id="task_suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={1}
        min={1}
        max={90}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
