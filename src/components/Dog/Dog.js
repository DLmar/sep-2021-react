const Dog = ({dog:{id,name},dispatch}) => {
    return (
        <div>
             {name}
            <button onClick={()=>dispatch({type:'Delete_Dog', payload:{id}})}>Delete</button>
        </div>
    );
};

export {Dog};