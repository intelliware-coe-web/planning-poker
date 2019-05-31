# Redux Model
```
{
  User: {
    id: String
  },
  Meeting: {
	  id: String
  },
  Story: {
    id: String,
    estimate: number,
    description: String
  },
  Estimation: number[],
  Host: {
    Stories: Story[],
    Attendees: User[]
  }
}
```