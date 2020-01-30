const initialState = {
  like: {},
  bookmark: {}
};

export default (state = initialState, action) => {
let oldState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "LIKE":
      const payload = Object.keys(action.payload);
      const objKeys = Object.keys(oldState.like);
      const isFound = objKeys.filter((item) => {
           return item === payload[0];
      })
      if (isFound.length) {
        objKeys.forEach(item => {
          if (payload.indexOf(item) > -1) {
            oldState.like[item] = action.payload[item];
          }
        });
        return {
          ...state,
          like: oldState.like
        };
      } else {
        oldState.like[payload[0]] = Object.values(action.payload)[0];
        return {
          ...state,
          like: oldState.like
        };
      }
    case "BOOKMARK":
        const payloadKey = Object.keys(action.payload);
        const objBookmarkKey = Object.keys(oldState.bookmark);
        const isBookmarkFound = objBookmarkKey.filter((item) => {
             return item === payloadKey[0];
        })
        if (isBookmarkFound.length) {
            objBookmarkKey.forEach(item => {
            if (payloadKey.indexOf(item) > -1) {
              oldState.bookmark[item] = action.payload[item];
            }
          });
          return {
            ...state,
            bookmark: oldState.bookmark
          };
        } else {
          oldState.bookmark[payloadKey[0]] = Object.values(action.payload)[0];
          return {
            ...state,
            bookmark: oldState.bookmark
          };
        }
    default:
      return state;
  }
};
