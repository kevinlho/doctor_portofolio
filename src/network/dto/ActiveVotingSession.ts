export interface SampleDTO {
    id: number
    title: string
    questionCount: number
    status: 'active' | 'scheduled' | 'ended'
    participants: number
    endTime: string // Or Date if using JS Date objects
}

export const DtoMock : SampleDTO[] = [
    {
      id: 1,
      title: "100 words- dolor sit amet, consectetur adipiscing elit. Suspendisse ac augue tortor. Pellentesque erat ipsum, tristique a venenatis non, mattis sit amet velit. Curabitur blandit sapien id leo tempor rhoncus. Donec consectetur neque tellus, id egestas nulla finibus nec. Nullam quis neque auctor, dignissim tortor eu, interdum est. Sed posuere egestas purus, quis laoreet magna ornare quis. Suspendisse rhoncus dolor a vestibulum vestibulum. Aenean in erat lectus. Etiam congue ante non lacus volutpat vestibulum. Cras erat sapien, pharetra in finibus sed, auctor eget dolor. In tellus sem, dictum et ultrices id, sagittis a velit. Quisque feugiat eros ut est cursus.",
      questionCount: 10,
      status: 'active',
      participants: 10,
      endTime: "2025-10-30 23:59:59" // Or Date if using JS Date objects
    },
    {
      id: 1,
      title: "100 words- dolor sit amet, consectetur adipiscing elit. Suspendisse ac augue tortor. Pellentesque erat ipsum, tristique a venenatis non, mattis sit amet velit. Curabitur blandit sapien id leo tempor rhoncus. Donec consectetur neque tellus, id egestas nulla finibus nec. Nullam quis neque auctor, dignissim tortor eu, interdum est. Sed posuere egestas purus, quis laoreet magna ornare quis. Suspendisse rhoncus dolor a vestibulum vestibulum. Aenean in erat lectus. Etiam congue ante non lacus volutpat vestibulum. Cras erat sapien, pharetra in finibus sed, auctor eget dolor. In tellus sem, dictum et ultrices id, sagittis a velit. Quisque feugiat eros ut est cursus.",
      questionCount: 10,
      status: 'active',
      participants: 10,
      endTime: "2025-10-30 23:59:59" // Or Date if using JS Date objects
    },
    {
      id: 1,
      title: "Nullam quis neque auctor, dignissim tortor eu, interdum est. Sed posuere egestas purus, quis laoreet magna ornare quis. Suspendisse rhoncus dolor a vestibulum vestibulum. Aenean in erat lectus. Etiam congue ante non lacus volutpat vestibulum. Cras erat sapien, pharetra in finibus sed, auctor eget dolor. In tellus sem, dictum et ultrices id, sagittis a velit. Quisque feugiat eros ut est cursus.",
      questionCount: 10,
      status: 'active',
      participants: 10,
      endTime: "2025-10-30 23:59:59" // Or Date if using JS Date objects
    },
    {
      id: 2,
      title: "ActiveVotingSession_2",
      questionCount: 10,
      status: 'scheduled',
      participants: 10,
      endTime: "2025-10-30 23:59:59" // Or Date if using JS Date objects
    },
    {
      id: 3,
      title: "ActiveVotingSession_3",
      questionCount: 10,
      status: 'ended',
      participants: 10,
      endTime: "2025-10-30 23:59:59" // Or Date if using JS Date objects
    }
]