function C4()
{
    const names=["Raj", "Rahul", "Shankar", "Dinesh", "Mahesh"];

    const ListName = () => {
        return names.map((val)=>{
            return <li>{val}</li>
        })
    }
    return(
        <div>
            <ol>
                {ListName()}
            </ol>
        </div>
    )
}
export default C4;