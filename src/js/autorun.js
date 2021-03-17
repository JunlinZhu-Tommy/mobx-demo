import { observable, autorun } from "mobx";

export default function autorunExample() {
  const addBtn = document.getElementById("add");
  const pointsLabel = document.getElementById("pointsLabel");
  const vipMember = observable({
    name: "Susan",
    age: 18,
    points: 0,
  });

  autorun(() => {
    pointsLabel.innerText = `[${vipMember.name}] has [${vipMember.points}] points`;
  });

  addBtn.addEventListener("click", () => {
    vipMember.points++;
  });
}
