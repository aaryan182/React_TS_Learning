import { Name } from "../components/Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h2>Person List</h2>
      {props.names.map((name) => (
        <h2 key={name.firstName}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
};
