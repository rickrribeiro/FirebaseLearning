const initState = {
    projects: [
        {id:'1', title:'iago', content: 'bla'},
        {id:'2', title:'Tomas', content: 'bla'},
        {id:'3', title:'Adaylton', content: 'bla'}
    ]

}

const projectReducer = (state = initState, action) => {
switch(action.type){
    case 'CREATE_PROJECT':
       // console.log('created: ',action.project)
        return state;
    case 'CREATE_PROJECT_ERROR':
       // console.log('error: ',action.err)
        return state;
    default:
        return state;
}
return state;

}

export default projectReducer;