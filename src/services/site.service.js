/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    query,
    getSiteById,
    getSiteIdxById,
    remove,
    saveSite,
    getEmptySite,
    changeProperty
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
    "style": {
        "padding": "0",
        "textAlign": "left"
    },
    "cmps": [
        {
            "id": "wc02",
            "type": "w-header",
            "SType": "header-basic",
            "info": {
                // ""
                "title": {
                    "txt": "HairDresser Baluta",
                    "style": { "color": "white" },
                },
                "substitle": {
                    "txt": "Your Hair is !(Who you Are)",
                    "style": { "color": "white","margin":"0 0 20px 0" },
                },
                "btn": { "label": "Schedule Today!", "link": "#wc03", "style": { "color": "white", "backgroundColor":"transparent", "padding":"10px","borderRadius":"20px","border":"2px solid white"} }
            },
            "style": {
                // "imgUrl": "https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png",
                "imgName": "galaxy",
                "padding": "10px",
                "textAlign": "center"
            }
        },
        {
            "id": "wc06",
            "type": "w-gallery",
            "SType": "gallery-basic",
            "info": {
                "image1": "myWeb/galleryImages/1.jpg",
                "image2": "myWeb/galleryImages/2.jpg",
                "image3": "myWeb/galleryImages/3.jpg"
            },
            "style": {
            
            }
        },
        {
            "id": "wc01",
            "type": "w-map",
            "SType": "map-basic",
            "info": {
                "name": "Paris",
                "lat": 32.109333,
                "lng": 34.855499,
                "zoom": 10
            },
            "style": {
                "backgroundColor": "#9fd0f1",
                "height": "300px",
                "padding": "10px"
            }
        },
        {
            "id": "wc03",
            "type": "w-text",
            "SType": "text-basic",
            "info": {
                "h1": {
                    "txt": "column",
                    "style": { "color": "red" },
                },
                "p": {
                    "txt": "column",
                    "style": { "color": "blue" },
                }
            },
            "style": {
                // "color":"red",

            }
        }
    ]
}]

function query() {
    return new Promise((resolve) => {
        var sitesToReturn = [...sites];
        resolve(sitesToReturn)
    })
}

function getSiteById(id) {
    return new Promise((resolve, reject) => {
        const site = sites.find(site => site._id === id)
        site ? resolve(site) : reject(`Site id ${id} not found!`)
    })
}
function getSiteIdxById(id) {
    return new Promise((resolve, reject) => {
        const site = sites.findIndex(site => site._id === id)
        site ? resolve(site) : reject(`Site id ${id} not found!`)
    })
}

function remove(id) {
    return new Promise((resolve) => {
        const index = sites.findIndex(site => site._id === id)
        if (index !== -1) {
            sites.splice(index, 1)
        }

        resolve(sites)
    })
}

function _updateSite(site) {
    return new Promise((resolve) => {
        const index = sites.findIndex(c => site._id === c._id)
        if (index !== -1) {
            sites[index] = site
        }
        resolve(site)
    })
}

function _addSite(site) {
    return new Promise((resolve) => {
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

async function changeProperty(site, cmpId, value, name, property) {
    let cmpIdx = site.cmps.findIndex((c) => c.id === cmpId)
    site.cmps[cmpIdx].info[name][property] = value
    return site
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}