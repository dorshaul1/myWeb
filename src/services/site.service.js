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
            "id": "wc01",
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
                    "style": { "color": "white", "margin": "0 0 20px 0" },
                },
                "btn": { "label": "Schedule Today!", "link": "#wc03", "style": { "color": "white", "backgroundColor": "transparent", "padding": "10px", "borderRadius": "20px", "border": "2px solid white" } }
            },
            "style": {
                // "imgUrl": "https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png",
                "imgName": "galaxy",
                "padding": "10px",
            }
        },
        {
            "id": "wc02",
            "type": "w-map",
            "SType": "map-basic",
            "info": {
                "name": "Paris",
                "lat": 32.109333,
                "lng": 34.855499,
                "zoom": 10
            },
            "style": {
                "backgroundColor": "f3f3f3",
                "height": "300px",
                "padding": "5px",
                "width": "100%"
            }
        },
        {
            "id": "wc03",
            "type": "w-text",
            "SType": "text-basic",
            "info": {
                "h1": {
                    "txt": "This is a h1",
                    "style": { "color": "#333" },
                },
                "p": {
                    "txt": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusamus. Facere, odio illo cumque voluptates beatae id blanditiis fugit optio neque similique quod molestias at ullam laboriosam impedit quaerat voluptatibus!",
                    "style": { "color": "#333" },
                }
            },
            "style": {
                "backgroundColor": "#d3d3d3"
            }
        },
        {
            "id": "wc04",
            "type": "w-gallery",
            "SType": "gallery-basic",
            "info": {
                "image1": "myWeb/galleryImages/1.jpg",
                "image2": "myWeb/galleryImages/2.jpg",
                "image3": "myWeb/galleryImages/3.jpg"
            },
            "style": {}
        },
        {
<<<<<<< HEAD
            "id": "wc05",
            "type": "w-cards",
            "SType": "cards-basic",
            "info": {
                "cards": [
                    {
                        "title": "Pizza",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nP6ZVvdF_Df-zNoTHvwOKMfiekTCxWc5Ng&usqp=CAU",
                        "description": "Neapolitan pizza Margherita.",
                        "link": "https://en.wikipedia.org/wiki/Pizza"
                    },
                    {
                        "title": "Hamburger",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvipnhYZ4MnbaSWmbCx9TMuWR_xoq5xf_4ig&usqp=CAU",
                        "description": "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
                        "link": "https://en.wikipedia.org/wiki/Hamburger"
                    },
                    {
                        "title": "Pasta",
                        "img": "https://medias.hashulchan.co.il/www/uploads/2019/06/shutterstock_583097113-600x600.jpg",
                        "description": "Originally, spaghetti was notably long, but shorter lengths gained in popularity during the latter half of the 20th century and now it is most commonly available in 25–30 cm (10–12 in) lengths.",
                        "link": "https://en.wikipedia.org/wiki/Spaghetti"
                    },
                ]
            },
            "style": {}
        },
        {
            "id": "wc06",
=======
            "id": "wc03",
            "type": "w-video",
            "SType": "video-basic",
            "info": {
                "informationContainer": {
                    "style": { "backgroundColor": "rgb(134, 218, 218)", }
                },
                "h1": {
                    "txt": "Bunny",
                    "style": { "color": "black", "text-align": "center", "fontSize": "22px", "margin": "10px" },
                },
                "video": {
                    "src": "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
                    "style": { "margin": "10px" },
                },
            },
            "style": {
                // "imgUrl": "https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png",
                // "imgName": "galaxy",
                "backgroundColor": "rgb(205, 255, 255)",
                "padding": "10px"
                // "color":"red",
            }
        },
        {
            "id": "wc03",
>>>>>>> 8843a09d9023d84d30c883e976dec6d87560b7d1
            "type": "w-footer",
            "SType": "footer-basic",
            "info": {
                "copyrights": {
                    "txt": "Copyright © 2021 All Rights Reserved by myWeb.",
                    "style": { "color": "white", "text-align": "center", "fontSize": "12px", "margin": "10px" },
                },
                "links": {
                    "a": [{
                        "label": "Facebook",
                        "href": "https://www.facebook.com/",
                        "style": { "color": "white" }
                    },
                    {
                        "label": "Instagram",
                        "href": "https://www.instagram.com/",
                        "style": { "color": "white" }
                    },
                    {
                        "label": "LinkedIn",
                        "href": "https://www.linkedin.com/feed/",
                        "style": { "color": "white" }
                    }],
                    "style": { "width": "100%", "display": "flex", "justify-content": "space-between", "padding": "20px 0" }
                },
            },
            "style": {
                // "imgUrl": "https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png",
                // "imgName": "galaxy",
                "backgroundColor": "darkBlue",
                "padding": "10px"
                // "color":"red",
            }
        },
       
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