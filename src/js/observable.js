import { observable } from "mobx";
// import bankStore from "./bankStore";

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

  // autorun(() => {
  //   console.log('张三的贷款：', bankUser.debit, '；张三的存贷比: ' + divisor);
  // });

  addBtn.addEventListener("click", () => {
    bankUser.income++;
  });
}
