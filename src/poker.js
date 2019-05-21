export default function poker() {
  let state = {
    size: null
  };

  let observers = [];

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
