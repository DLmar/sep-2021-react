const Cat = ({cat:{id,name},dispatch}) => {
    return (
        <div>
           {name}
            <button onClick={()=>dispatch({type:'Delete_Cat', payload:{id}})}>Delete</button>
        </div>
    );
};

export {Cat};