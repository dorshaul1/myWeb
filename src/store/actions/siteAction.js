import siteService from '../../services/site.service'

// Thunk - Action Dispatcher
export function loadSites(filterBy) {
  //   console.log('filterBy:', filterBy)
  return async dispatch => {
    const sites = await siteService.query(filterBy)
    // console.log('sites:', sites)
    const action = {
      type: 'SET_SITES',
      sites
    }
    dispatch(action)
  }
}

export function getSiteById(siteId) {
  return async dispatch => {
    const site = await siteService.getSiteById(siteId)
    // console.log('site:', site)
    dispatch({ type: 'SET_SITE', site })
  }
}
export function saveSite(site) {
  return async dispatch => {
    const isAdd = !site._id
    const updatedSite = await siteService.saveSite(site)

    if (isAdd) dispatch({ type: 'ADD_SITE', site: updatedSite })
    else dispatch({ type: 'UPDATE_SITE', updatedSite })
  }
}

export function removeSite(siteId) {
  return async dispatch => {
    await siteService.remove(siteId)
    dispatch({ type: 'REMOVE_SITE', siteId })
  }
}

export function togglePreview() {
  return async dispatch => {
    dispatch({ type: 'TOGGLE_PREVIEW' })
  }
}

export function toggleEditing() {
  return async dispatch => {
    dispatch({ type: 'TOGGLE_EDITING' })
  }
}

export function getCmpTypes() {
  return async dispatch => {
    return siteService.getCmpTypes()
  }
}

export function changeProperty(site, cmpId, value, name, property) {
  return async dispatch => {
    const newSite = await siteService.changeProperty(site, cmpId, value, name, property)
    // const siteIdx = await siteService.getSiteIdxById(site.id)
    dispatch({ type: 'CHANGE_PROPERTY', newSite })
  }
}

export function addCmp(siteId, newCmp) {
  return async dispatch => {
    const site = await siteService.addCmp(siteId, newCmp)
    dispatch({ type: 'SET_SITE', site })
  }
}

export function setElement(cmpId, element = null, elName) {
  return async dispatch => {
    // console.log('element:', element)
    const elToEdit = element ? { cmpId, elName, details: {...element} } : null
    dispatch({ type: 'SET_EL', elToEdit })
  }
}

export function updateEl(siteId, newEl) {
  return async dispatch => {
    // console.log('element:', element)
    // const elToEdit = element ? { cmpId, elName, ...element } : null  
    const site = await siteService.updateEl(siteId, newEl)
    console.log('updated site:', site)
    dispatch({ type: 'SET_SITE', site })
  }
}
