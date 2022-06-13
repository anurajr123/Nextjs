export default function posts() {
    const array: string[] = [
        "Good Morning",
        'Good afternoon',
        'Good evening',
    ]
    const items = array.map((value: string, index: number) =>(
        <li key={index}>{value}</li>
    ));
  return (
    <div className="componentClass">
       <h1>Posts</h1>
       <ul>{items}</ul>
    </div>
  )
}
