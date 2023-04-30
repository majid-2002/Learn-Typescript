export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  //? getter and setter of id
  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  //? getter and setter of item
  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  //? getter and setter of checked
  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}
