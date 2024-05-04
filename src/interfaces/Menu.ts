
  interface Item {
    id: string
    seq: number
    photoUrl: string
    title: string
    description: string
    price: string,
    quantity: number
}

export default interface Menu {
    title: string
    items: Item[]
}

 