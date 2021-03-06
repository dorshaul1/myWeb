const INITIAL_STATE = {
  sites: [],
  currSite: null,
  isPreview: false,
  isEditing: false,
  elToEdit: null
}

export function siteReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'SET_SITES':
      //   console.log('action', action)
      return {
        ...state,
        sites: action.sites
      }
    case 'SET_SITE':
      return {
        ...state,
        currSite: action.site
      }
    case 'ADD_SITE':
      return {
        ...state,
        sites: [...state.sites, action.site]
      }
    case 'REMOVE_SITE':
      return {
        ...state,
        sites: state.sites.filter(site => site._id !== action.siteId)
      }
    case 'UPDATE_SITE':
      const { updatedSite } = action
      return {
        ...state,
        sites: state.sites.map(site => site._id === updatedSite._id ? updatedSite : site)
      }
    case 'TOGGLE_PREVIEW':
      // const { updatedSite } = action
      return {
        ...state,
        isPreview: !state.isPreview
      }
    case 'TOGGLE_EDITING':
      // const { updatedSite } = action
      return {
        ...state,
        isEditing: !state.isEditing
      }
    case 'CHANGE_PROPERTY':
      const { newSite } = action
      return {
        ...state,
        currSite: newSite
      }
    case 'SET_EL':
      const { elToEdit } = action
      return {
        ...state,
        elToEdit: { ...elToEdit, siteId: state.currSite._id }
      }
    default:
      return state
  }
}