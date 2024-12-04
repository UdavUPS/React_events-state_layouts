import list from'../img/list.svg';
import module from'../img/module.svg';

export function IconSwitch({onClick, icon}) {
    let forSrc = list;

    if (icon === 'view_list') {
        forSrc = list;
    }
    if (icon === 'view_module') {
        forSrc = module;
    }


    return (
        <img onClick={onClick} src={forSrc} alt="" className='viewIcon' /> 
    )
    
}
