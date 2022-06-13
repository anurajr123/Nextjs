export default function users() {
    const array = ["Virat", 'Sachin', "Viru"];
    const items =  array.map((value: string, index: number) =>(
        <li key={index}>{value}</li>
    ));
  return (
    <div className="componentClass">
       <h1>Users</h1>
       <ul>{items}</ul>
    </div>
  )
}
