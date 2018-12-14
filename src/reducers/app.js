import { REHYDRATE } from 'redux-persist/constants'

const app = (state = { isLoading: false, threads: [] }, action) => {

  switch (action.type) {

    case 'REHYDRATE':
      console.log(action)
      const incoming = action.payload.myReducer

      return (incoming)
        ? {
            ...state,
            ...incoming,
            specialKey: processSpecial(incoming.specialKey)
          }
        : state
  }

}

export default app
