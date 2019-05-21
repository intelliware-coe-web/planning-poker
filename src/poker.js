export default function poker() {
  const state = {
    size: null
  };

  const observers = [];

  function publish() {
    observers.forEach(observer => observer(state.size));
  }

  return {
    estimate(size) {
      state.size = size;
      publish();
    },
    onEstimate(callback) {
      observers.push(callback);
    }
  }
}
