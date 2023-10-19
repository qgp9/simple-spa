function createSignal(initialValue) {
  let value = initialValue;
  const signal = () => value
  signal.effectList = [];
  signal.set = (newValue) => {
    value = newValue;
    signal.effectList.forEach(effect => effect());
  }
  signal.dom = () => {
    const element = document.createTextNode(value);
    createEffect(() => {
      element.textContent = signal();
    }, [signal]);
    return element;
  }
  return signal;
}

function createEffect(effect, signals) {
  signals.forEach(signal => signal.effectList.push(effect));
  effect();
}

export {
  createSignal,
  createEffect,
}