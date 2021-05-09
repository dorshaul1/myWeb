// import { site } from '../data/site'

export default {
    query,
    getSiteById,
    remove,
    saveSite,
    getEmptySite
}

const sites = [{
    "_id": "5e28393890dd7201a06d4e44",
    "name": "Site example",
    "previewImg": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
    "createdAt": 6556656454,
    "lastEdited": null,
    "createdBy": {
        "_id": "5e26e0b718a0891d4c995527",
        "username": "Hetro Sekshual"
    },
    "cmps": [
        {
            "id": "wc02",
            "type": "wap-header",
            "info": {
                "title": "HairDresser Baluta",
                "substitle": "Your Hair is !(Who you Are)",
                "btn": { "label": "Schedule Today!", "link": "#wc03" }
            },
            "style": {
                "background": "url()",
                "padding": "10px"
            }
        },
        {
            "id": "wc01",
            "type": "wap-map",
            "info": {
                "name": "Paris",
                "lat": 12.909,
                "lng": 23.9,
                "zoom": 2
            },
            "style": {
                "backgroundColor": "#f53b76",
                "height": "300px",
                "padding": "10px"
            }
        },
        {
            "id": "wc03",
            "type": "wap-container",
            "info": {
                "dir": "column",
                "cmps": [
                    {},
                    {}
                ]
            },
            "style": {
            }
        }
    ]
}]

// function sort(arr) {
//     return arr.sort((a, b) => {
//       if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//         return -1;
//       }
//       if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//         return 1;
//       }

//       return 0;
//     })
//   }

function query(filterBy = null) {
    return new Promise((resolve, reject) => {
        var sitesToReturn = [...sites];
        // if (filterBy && filterBy.name) {
        //     sitesToReturn = filter(filterBy.name)
        // }
        // resolve(sort(sitesToReturn))
        resolve(sitesToReturn)
    })
}

function getSiteById(id) {
    return new Promise((resolve, reject) => {
        const site = sites.find(site => site._id === id)
        site ? resolve(site) : reject(`Site id ${id} not found!`)
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        const index = sites.findIndex(site => site._id === id)
        if (index !== -1) {
            sites.splice(index, 1)
        }

        resolve(sites)
    })
}

function _updateSite(site) {
    return new Promise((resolve, reject) => {
        const index = sites.findIndex(c => site._id === c._id)
        if (index !== -1) {
            sites[index] = site
        }
        resolve(site)
    })
}

function _addSite(site) {
    return new Promise((resolve, reject) => {
        site._id = _makeId()
        sites.push(site)
        resolve(site)
    })
}

function saveSite(site) {
    return site._id ? _updateSite(site) : _addSite(site)
}

function getEmptySite() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

// function filter(term) {
//     term = term.toLocaleLowerCase()
//     return sites.filter(site => {
//         return site.name.toLocaleLowerCase().includes(term) ||
//             site.phone.toLocaleLowerCase().includes(term) ||
//             site.email.toLocaleLowerCase().includes(term)
//     })
// }

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}