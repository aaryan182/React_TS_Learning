import { PersonProps } from "../components/Person.types";

export const Person = (props: PersonProps) => {

  return (
    <div>
      <h2>{props.name.firstName} {props.name.lastName}</h2>
    </div>
  )
}
