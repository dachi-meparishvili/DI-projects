type CounterAction = {
  type: string;
  payload?: number;
};

export function counterReducer(state: number = 0, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload ?? 1);
    case "DECREMENT":
      return state - (action.payload ?? 1);
    default:
      return state;
  }
}
