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

export function changeProperty(site, cmpId, value, name, property) {
  return async dispatch => {
    const newSite = await siteService.changeProperty(site, cmpId, value, name, property)
    // const siteIdx = await siteService.getSiteIdxById(site.id)
    dispatch({ type: 'CHANGE_PROPERTY', newSite  })
}
}