import { observable, autorun, computed } from "mobx";

export default function autorunExample() {
  const addBtn = document.getElementById("add");
  const pointsLabel = document.getElementById("pointsLabel");
  var bankUser = observable({
    income: 3,
    debit: 2,
  });

  // var divisor = computed(() => {
  //   return bankUser.income / bankUser.debit;
  // });

  // var indication = computed(() => {
  //   return divisor / (bankUser.income + 1);
  // });

  /**
   * Example1: autorun on direct observable changes.
   */
  autorun(() => {
    pointsLabel.innerText = `${bankUser.income} Income`;
  });

  addBtn.addEventListener("click", () => {
    bankUser.income++;
  });
}
