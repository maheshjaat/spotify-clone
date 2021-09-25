export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    spotify:null,
    //Remove after finishing developing.....
    // token:null,
    // token:'BQA7cGcCDZ4S5AYqpv3yRL7fcbkTpY6DaucpLlEl9Ajb2yd8-OhMZ91h9URwF7QXLgk0aHq4s5e2Ii8_sk0dRwpTnl7paW4Y1qNzob7Eq97AQdgjTNrLqEyeGCPlIBk8t8M-TCVYm7uClaCQV2JFM4T16yog8UFVyqfbqjMqxyfy5gIv',
    // token:'BQCUi4IDeGk6mDRX8oDMhTtpfB-J1kmGRWDi1Nl_6h2lKQU6xt…Tdv1pSlgtjQDOeI2AFXCrjngCefY14UKgBr41S10ZmU5VJP50',
}

const reducer =(state, action)=> {
    console.log(action);

//Action -> type, [payload]
    switch(action.type){
        case 'SET_USER':
         return {
             ...state,
             user : action.user
         }
         case 'SET_TOKEN':
             return{
                 ...state,
                 user : action.token,
             }
         case "SET_PLAYLISTS":
             return{
                 ...state,
                 playlists: action.playlists,
             }
         case "SET_DISCOVER_WEEKLY" : 
              return{
                ...state,
                 discover_weekly : action.discover_weekly,
        }  
         default:
             return state;
    }
}
export default reducer;