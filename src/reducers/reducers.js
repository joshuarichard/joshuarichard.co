const reducers = (
  state = {
    isLoading: false,
    threads: [],
    user: null,
    isLogin: false,
    isCreateThread: false
  },
  action
) => {

  switch (action.type) {
    case 'ADD_THREAD':
      return {
        ...state,
        threads: [
          ...state.threads,
          {
            id: action.id,
            title: action.title,
            body: action.body,
            authorName: action.authorName,
            authorId: action.authorId
          }
        ],
        newThreads: state.newThreads.slice(1)
      }

    case 'REMOVE_THREAD':
      return {
        ...state,
        threads: state.threads.filter(thread => thread.id !== action.id)
      }

    case 'REMOVE_ALL_THREADS':
      return {
        ...state,
        threads: []
      }

    case 'FETCH_THREADS':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_THREADS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        newThreads: action.newThreads
      }

    case 'FETCH_THREADS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case 'CREATE_USER':
      return {
        ...state,
        isLoading: true
      }

    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.user
      }

    case 'CREATE_USER_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case 'LOGIN_USER':
      return {
        ...state,
        isLoading: true
      }

    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.user
      }

    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case 'LOG_OUT_USER':
      return {
        ...state,
        user: undefined,
        threads: []
      }

    case 'CREATE_THREAD':
      return {
        ...state,
        isLoading: true
      }

    case 'CREATE_THREAD_SUCCESS':
      return {
        ...state,
        isLoading: false
      }

    case 'CREATE_THREAD_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case 'SWITCH_TO_LOGIN':
      return {
        ...state,
        isLogin: !state.isLogin
      }

    case 'SWITCH_TO_REGISTER':
      return {
        ...state,
        isLogin: !state.isLogin
      }

     case 'SWITCH_TO_CREATE_THREAD':
       return {
         ...state,
         isCreateThread: !state.isCreateThread
       }

    case 'SWITCH_TO_HOME_SCREEN':
      return {
        ...state,
        isCreateThread: !state.isCreateThread
      }

    default:
      return state

  }
}

export default reducers
