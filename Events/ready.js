module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "En cours de développement !"
        }
    })
}