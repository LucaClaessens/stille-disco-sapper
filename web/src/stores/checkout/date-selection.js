import { derived, writable } from 'svelte/store';

function formatDate(v) {
  if(v == null) return null;
  let date = new Date(v);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${day}-${month}-${year}`;
}

function createDateStore(){
	const { subscribe, set } = writable(null);

	return {
		subscribe,
    set: (n) => {
      if(typeof n === 'number'){
        set(new Date(n));
      } else if (n instanceof Date || n == null){
        set(n);
      } else {
        throw new Error('You can only provide a Date or null to the date store');
      }
    }
	};
}

function extrapolateDate(dateObservable){
  return derived(
    dateObservable,
    $date => formatDate($date)
  )
};

const from = createDateStore();
const to = createDateStore();
const fromString = extrapolateDate(from);
const toString = extrapolateDate(to);
const rangeString = derived([fromString, toString], ([$from, $to]) => {
  if($from && $to) return `${$from} → ${$to}`;
  return null;
})

export const dateSelectionController = derived(
    [
      from,
      to,
      fromString,
      toString,
      rangeString
    ],
    ([$from, $to, $fromString, $toString, $rangeString]) => ({
      setFrom: (n) => from.set(n),
      setTo: (n) => to.set(n),
      from: $from,
      to: $to,
      fromFormatted: $fromString,
      toFormatted: $toString,
      rangeFormatted: $rangeString
    })
);
