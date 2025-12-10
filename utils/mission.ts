export const missionList = [
  "EMPOWER COMMUNITIES",
  "A FAIR CHANCE",
  "TO WIN, OWN, AND",
  "GROW TOGETHER",
];

export const missionListV2 = [
  {
    id: 0,
    items: [
      { text: "EMPOWER", move: null, maxFactor: 0 },
      { text: "COMMUNITIES", move: "right", maxFactor: 0.42 },
    ],
  },
  {
    id: 1,
    items: [
      { text: "A ", move: "left", maxFactor: 0.62 },
      { text: "FAIR ", move: "left", maxFactor: 0.3 },
      { text: "CHANCE", move: null, maxFactor: 0 },
    ],
  },
  {
    id: 2,
    items: [
      { text: "TO ", move: null, maxFactor: 0 },
      { text: "WIN, ", move: "right", maxFactor: 0.2 },
      { text: "OWN, ", move: "right", maxFactor: 0.4 },
      { text: "AND", move: "right", maxFactor: 0.56 },
    ],
  },
  {
    id: 3,
    items: [
      { text: "GROW ", move: "left", maxFactor: 0.6 },
      { text: "TOGETHER", move: null, maxFactor: 0 },
    ],
  },
];