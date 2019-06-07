# Redux Model

```
{
  User: {
    id: String,
    name: String
  },
  CurrentStory: {
    id: String,
    name: String
  },
  CurrentMeeting: {
    id: String,
    name: String
  },
  Meetings: Meeting[{id: String, name: String}],
  Stories: Story[{id: String, name: String}],
  Estimation: number,
  EstimationSummary: Estimate[{username: String, estimate: number}]
}
```