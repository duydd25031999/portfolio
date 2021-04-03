import React from "react";

const ItemslistData = ({ isSkills, list }) => (
    <>
        {
            isSkills ?
                (
                    <ul className="itemslist__data">
                        {list.map((name, i) => (
                            <ItemslistElement itemName={name} key={i} />
                        ))}
                    </ul>
                ) :
                (
                    <>
                        {list.map((name, i) => (
                            <ItemslistElement itemName={name} key={i} />
                        ))}
                    </>
                )
        }
    </>

)

ItemslistData.defaultProps = {
    isSkills: false
}

const ItemslistElement = ({ itemName }) => (
    <li className="itemslist__name">
        <span className="itemslist__circle"></span>
        {itemName}
    </li>
)

export default ItemslistData;