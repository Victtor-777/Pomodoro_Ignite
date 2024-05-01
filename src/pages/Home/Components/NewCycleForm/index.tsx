import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CyclesContext } from "../..";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Report the task"),
    minutesAmount: zod
      .number()
      .min(1, "set a time of 5 to 90 minutes")
      .max(90, "set a time of 5 to 90 minutes"),
  });

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

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
