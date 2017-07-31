const BOARD = [
  { id: 1, x: 1, y: 1, origin: [1, 6], wordId: [1, 6], value: "" },
  { id: 2, x: 2, y: 1, origin: [], wordId: [6], value: "" },
  { id: 3, x: 3, y: 1, origin: [], wordId: [6], value: "" },
  { id: 4, x: 4, y: 1, origin: [], wordId: [6], value: "" },
  { id: 5, x: 5, y: 1, origin: [], wordId: [6], value: "" },
  { id: 6, x: 6, y: 1, origin: [], wordId: [6], value: "" },
  { id: 7, x: 7, y: 1, origin: [], wordId: [], value: "" },
  { id: 8, x: 8, y: 1, origin: [4], wordId: [4], value: "" },
  { id: 9, x: 9, y: 1, origin: [], wordId: [], value: "" },
  { id: 10, x: 10, y: 1, origin: [], wordId: [], value: "" },

  { id: 11, x: 1, y: 2, origin: [], wordId: [1], value: "" },
  { id: 12, x: 2, y: 2, origin: [], wordId: [], value: "" },
  { id: 13, x: 3, y: 2, origin: [], wordId: [], value: "" },
  { id: 14, x: 4, y: 2, origin: [], wordId: [], value: "" },
  { id: 15, x: 5, y: 2, origin: [7], wordId: [7], value: "" },
  { id: 16, x: 6, y: 2, origin: [], wordId: [7], value: "" },
  { id: 17, x: 7, y: 2, origin: [], wordId: [7], value: "" },
  { id: 18, x: 8, y: 2, origin: [], wordId: [4, 7], value: "" },
  { id: 19, x: 9, y: 2, origin: [], wordId: [7], value: "" },
  { id: 20, x: 10, y: 2, origin: [5], wordId: [5, 7], value: "" },

  { id: 21, x: 1, y: 3, origin: [], wordId: [1], value: "" },
  { id: 22, x: 2, y: 3, origin: [], wordId: [], value: "" },
  { id: 23, x: 3, y: 3, origin: [2], wordId: [2], value: "" },
  { id: 24, x: 4, y: 3, origin: [], wordId: [], value: "" },
  { id: 25, x: 5, y: 3, origin: [], wordId: [], value: "" },
  { id: 26, x: 6, y: 3, origin: [], wordId: [], value: "" },
  { id: 27, x: 7, y: 3, origin: [], wordId: [], value: "" },
  { id: 28, x: 8, y: 3, origin: [], wordId: [4], value: "" },
  { id: 29, x: 9, y: 3, origin: [], wordId: [], value: "" },
  { id: 30, x: 10, y: 3, origin: [], wordId: [5], value: "" },

  { id: 31, x: 1, y: 4, origin: [], wordId: [1], value: "" },
  { id: 32, x: 2, y: 4, origin: [], wordId: [], value: "" },
  { id: 33, x: 3, y: 4, origin: [], wordId: [2], value: "" },
  { id: 34, x: 4, y: 4, origin: [], wordId: [], value: "" },
  { id: 35, x: 5, y: 4, origin: [], wordId: [], value: "" },
  { id: 36, x: 6, y: 4, origin: [3], wordId: [3], value: "" },
  { id: 37, x: 7, y: 4, origin: [], wordId: [], value: "" },
  { id: 38, x: 8, y: 4, origin: [], wordId: [4], value: "" },
  { id: 39, x: 9, y: 4, origin: [], wordId: [], value: "" },
  { id: 40, x: 10, y: 4, origin: [], wordId: [5], value: "" },

  { id: 41, x: 1, y: 5, origin: [], wordId: [1], value: "" },
  { id: 42, x: 2, y: 5, origin: [], wordId: [], value: "" },
  { id: 43, x: 3, y: 5, origin: [], wordId: [2], value: "" },
  { id: 44, x: 4, y: 5, origin: [], wordId: [], value: "" },
  { id: 45, x: 5, y: 5, origin: [], wordId: [], value: "" },
  { id: 46, x: 6, y: 5, origin: [], wordId: [3], value: "" },
  { id: 47, x: 7, y: 5, origin: [], wordId: [], value: "" },
  { id: 48, x: 8, y: 5, origin: [], wordId: [4], value: "" },
  { id: 49, x: 9, y: 5, origin: [], wordId: [], value: "" },
  { id: 50, x: 10, y: 5, origin: [], wordId: [5], value: "" },

  { id: 51, x: 1, y: 6, origin: [], wordId: [1], value: "" },
  { id: 52, x: 2, y: 6, origin: [], wordId: [], value: "" },
  { id: 53, x: 3, y: 6, origin: [], wordId: [2], value: "" },
  { id: 54, x: 4, y: 6, origin: [], wordId: [], value: "" },
  { id: 55, x: 5, y: 6, origin: [], wordId: [], value: "" },
  { id: 56, x: 6, y: 6, origin: [], wordId: [3], value: "" },
  { id: 57, x: 7, y: 6, origin: [], wordId: [], value: "" },
  { id: 58, x: 8, y: 6, origin: [], wordId: [4], value: "" },
  { id: 59, x: 9, y: 6, origin: [], wordId: [], value: "" },
  { id: 60, x: 10, y: 6, origin: [], wordId: [5], value: "" },

  { id: 61, x: 1, y: 7, origin: [], wordId: [1], value: "" },
  { id: 62, x: 2, y: 7, origin: [], wordId: [], value: "" },
  { id: 63, x: 3, y: 7, origin: [], wordId: [2], value: "" },
  { id: 64, x: 4, y: 7, origin: [8], wordId: [8], value: "" },
  { id: 65, x: 5, y: 7, origin: [], wordId: [8], value: "" },
  { id: 66, x: 6, y: 7, origin: [], wordId: [8], value: "" },
  { id: 67, x: 7, y: 7, origin: [], wordId: [8], value: "" },
  { id: 68, x: 8, y: 7, origin: [], wordId: [8], value: "" },
  { id: 69, x: 9, y: 7, origin: [], wordId: [], value: "" },
  { id: 70, x: 10, y: 7, origin: [], wordId: [], value: "" },

  { id: 71, x: 1, y: 8, origin: [], wordId: [1], value: "" },
  { id: 72, x: 2, y: 8, origin: [], wordId: [], value: "" },
  { id: 73, x: 3, y: 8, origin: [], wordId: [2], value: "" },
  { id: 74, x: 4, y: 8, origin: [], wordId: [], value: "" },
  { id: 75, x: 5, y: 8, origin: [], wordId: [], value: "" },
  { id: 76, x: 6, y: 8, origin: [], wordId: [], value: "" },
  { id: 77, x: 7, y: 8, origin: [], wordId: [], value: "" },
  { id: 78, x: 8, y: 8, origin: [], wordId: [], value: "" },
  { id: 79, x: 9, y: 8, origin: [], wordId: [], value: "" },
  { id: 80, x: 10, y: 8, origin: [], wordId: [], value: "" },

  { id: 81, x: 1, y: 9, origin: [], wordId: [1], value: "" },
  { id: 82, x: 2, y: 9, origin: [], wordId: [], value: "" },
  { id: 83, x: 3, y: 9, origin: [], wordId: [2], value: "" },
  { id: 84, x: 4, y: 9, origin: [], wordId: [], value: "" },
  { id: 85, x: 5, y: 9, origin: [9], wordId: [9], value: "" },
  { id: 86, x: 6, y: 9, origin: [], wordId: [9], value: "" },
  { id: 87, x: 7, y: 9, origin: [], wordId: [9], value: "" },
  { id: 88, x: 8, y: 9, origin: [], wordId: [9], value: "" },
  { id: 89, x: 9, y: 9, origin: [], wordId: [9], value: "" },
  { id: 90, x: 10, y: 9, origin: [], wordId: [9], value: "" },

  { id: 91, x: 1, y: 10, origin: [10], wordId: [1, 10], value: "" },
  { id: 92, x: 2, y: 10, origin: [], wordId: [10], value: "" },
  { id: 93, x: 3, y: 10, origin: [], wordId: [10], value: "" },
  { id: 94, x: 4, y: 10, origin: [], wordId: [10], value: "" },
  { id: 95, x: 5, y: 10, origin: [], wordId: [10], value: "" },
  { id: 96, x: 6, y: 10, origin: [], wordId: [10], value: "" },
  { id: 97, x: 7, y: 10, origin: [], wordId: [10], value: "" },
  { id: 98, x: 8, y: 10, origin: [], wordId: [10], value: "" },
  { id: 99, x: 9, y: 10, origin: [], wordId: [10], value: "" },
  { id: 100, x: 10, y: 10, origin: [], wordId: [10], value: "" }
];

export default BOARD;