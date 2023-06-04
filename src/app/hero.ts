export class Hero {
  constructor(
    public checkboxItems: { value: string; label: string; checked: boolean }[]
  ) {}
}


// GET /platformList
const platfromLists = ["IIB", "Test"]

// GET /recordobject
const recordObject = {
  platformList: ["Test"]
}
const checkboxItems = platfromLists.map((platformItem) => ({
  value: platformItem,
  checked: recordObject.platformList.findIndex((p) => platformItem === p) >= 0,
}));



[
  {
    value: "IIB",
    checked: false
  },
  {
    value: "Test",
    checked: true
  }
]