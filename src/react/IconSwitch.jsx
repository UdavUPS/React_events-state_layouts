import list from'../img/list.svg';
import module from'../img/module.svg';

export function IconSwitch({onClick, icon}) {

    return (
        <img onClick={onClick} src={icon === 'view_list' ? list : module} alt="" className='viewIcon' /> 
    )
    
}
