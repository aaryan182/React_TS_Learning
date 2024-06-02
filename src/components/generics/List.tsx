type ListProps<T extends React.ReactNode> = {
    items: T[]
    onclick: (value: T) => void
}

export const List = <T extends React.ReactNode>({items, onclick} : ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item: T, index: number) => {
                return (
                    <div key={index} onClick={() => onclick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}